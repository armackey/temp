import { Observable, fromObject } from 'tns-core-modules/data/observable';
import { VideoActivityBase } from './twilio-video.d';
import * as app from "tns-core-modules/application";
import { LocalVideoTrack, LocalAudioTrack, CameraCapturer, Room, LocalParticipant, AudioManager, RemoteParticipant } from './twilio-classes';
import { RemoteVideo } from './remoteVideo';
import { LocalVideo } from './localVideo';
import * as utils from "tns-core-modules/utils/utils";

declare var com, android, java: any;
const blah = com.twilio.video.AudioCodec;
export class VideoActivity implements VideoActivityBase {

    // public previousAudioMode: any;
    // public localVideoView: any;
    // public remoteVideoView: any;
    // public localVideoTrack: any;
    // public localAudioTrack: any;
    // public cameraCapturer: any;
    // public TWILIO_ACCESS_TOKEN: string;
    // public room: any;
    // public previousMicrophoneMute: boolean;
    // public localParticipant: any;
    // public audioManager: any;
    
    // public participant: any;

	// private _event: Observable;

	private previousAudioMode: number;
	private event;

	localVideoView: LocalVideo;
	remoteVideoViews: RemoteVideo[];
	localVideoTrack: LocalVideoTrack;
	localAudioTrack: LocalAudioTrack;
	cameraCapturer: CameraCapturer;
	TWILIO_ACCESS_TOKEN: string;
	room: Room;
	previousMicrophoneMute: boolean;
	localParticipant: LocalParticipant;
	audioManager: AudioManager;

    constructor() {

        this._event = new Observable();

        /*
         * Update preferred audio and video codec in case changed in settings
         */
        // this.audioCodec = getCodecPreference(SettingsActivity.PREF_AUDIO_CODEC,
        //     SettingsActivity.PREF_AUDIO_CODEC_DEFAULT,
        //     AudioCodec.class);
        // this.videoCodec = getCodecPreference(SettingsActivity.PREF_VIDEO_CODEC,
        //     SettingsActivity.PREF_VIDEO_CODEC_DEFAULT,
        //     VideoCodec.class);        

    }

    get event(): Observable {

        return this._event;

    }

	toggleSpeakerPhone(bool: boolean): void {

		this.audioManager.setSpeakerphoneOn(!this.isSpeakerPhoneOn());

	}

	isSpeakerPhoneOn(): boolean {

		return this.audioManager.isSpeakerphoneOn();

	}

    /*
     * Get the preferred audio codec from shared preferences
     */
	private getAudioCodecPreference(key: string, defaultValue: string): typeof blah {
		final String audioCodecName = preferences.getString(key, defaultValue);

		switch (audioCodecName) {
			case IsacCodec.NAME:
				return new IsacCodec();
			case OpusCodec.NAME:
				return new OpusCodec();
			case PcmaCodec.NAME:
				return new PcmaCodec();
			case PcmuCodec.NAME:
				return new PcmuCodec();
			case G722Codec.NAME:
				return new G722Codec();
			default:
				return new OpusCodec();
		}
	}

    public connect_to_room(roomName: string, options: { video: boolean, audio: boolean }) {

        if (!this.TWILIO_ACCESS_TOKEN) {

            this.onError('Please provide a valid token to connect to a room');

            return;

        }



		let connectOptionsBuilder = new ConnectOptions.Builder(this.TWILIO_ACCESS_TOKEN).roomName(roomName);

        if (options.audio) {

            app.android.foregroundActivity.setVolumeControlStream(AudioManager.STREAM_VOICE_CALL);

            this.audioManager = app.android.context.getSystemService(android.content.Context.AUDIO_SERVICE);

            this.audioManager.setSpeakerphoneOn(true);

            this.configure_audio(true);

            this.localAudioTrack = com.twilio.video.LocalAudioTrack.create(utils.ad.getApplicationContext(), true, "mic");
			

            /*
            * Add local audio track to connect options to share with participants.
            */

            connectOptionsBuilder.audioTracks(java.util.Collections.singletonList(this.localAudioTrack));


        }

        /*
         * Add local video track to connect options to share with participants.
         */
        if (options.video) {

            this.start_preview();

        }

        if (this.localVideoTrack && options.video) {

			// this.participantListenersObject.onVideoTrackSubscribed = true;

			// this.participantListenersObject.onVideoTrackUnpublished = true;

            connectOptionsBuilder.videoTracks(java.util.Collections.singletonList(this.localVideoTrack));
			

        }

        /*
         * Set the preferred audio and video codec for media.
         */
        // connectOptionsBuilder.preferAudioCodecs(java.util.Collections.singletonList(audioCodec));
        // connectOptionsBuilder.preferVideoCodecs(java.util.Collections.singletonList(videoCodec));

        /*
         * Set the sender side encoding parameters.
         */
        // connectOptionsBuilder.encodingParameters(encodingParameters);

        // room = Video.connect(this, connectOptionsBuilder.build(), roomListener());
        // setDisconnectAction();        
		// com.twilio.video.connect
        this.room = com.twilio.video.Video.connect(utils.ad.getApplicationContext(), connectOptionsBuilder.build(), this.roomListener());
		
    }

    start_preview(): any {

        if (this.localVideoTrack && this.localVideoTrack !== null) {

            return;

        };
        // this.cameraCapturer = new CameraCapturer(utils.ad.getApplicationContext(), CameraCapturer.CameraSource.FRONT_CAMERA, this.cameraListener());
		

        this.cameraCapturer = new CameraCapturer(utils.ad.getApplicationContext(), CameraCapturer.CameraSource.FRONT_CAMERA, null);
		


        this.localVideoTrack = LocalVideoTrack.create(utils.ad.getApplicationContext(), true, this.cameraCapturer, 'camera');
		


        this.localVideoTrack.addRenderer(this.localVideoView);


        this.localVideoView.setMirror(true);


    }



    private addRemoteParticipant(remoteParticipant: any) {

        if (remoteParticipant.getRemoteVideoTracks().size() > 0) {

            let remoteVideoTrackPublication = remoteParticipant.getRemoteVideoTracks().get(0);

            if (remoteVideoTrackPublication.isTrackSubscribed()) {

                this.addRemoteParticipantVideo(remoteVideoTrackPublication.getRemoteVideoTrack());

            }

        }
        /*
         * Start listening for participant events
         */
        remoteParticipant.setListener(this.participantListener());

    }


    onError(reason: string) {
        this._event.notify({
            eventName: 'error',
            object: fromObject({
                reason: reason
            })
        });
    }


    public removeParticipantVideo(videoTrack) {
		
        videoTrack.removeRenderer(this.remoteVideoView);

    }

    public removeRemoteParticipant(remoteParticipant) {

		//TODO: 
		// on array
		// check identity of participant leaving
		// then remove

        // if (!remoteParticipant.getIdentity().equals(remoteParticipantIdentity)) {
        //     return;
        // }

        /*
        * Remove remote participant renderer
        */
        if (!remoteParticipant.getRemoteVideoTracks().isEmpty()) {

            let remoteVideoTrackPublication = remoteParticipant.getRemoteVideoTracks().get(0);
            /*
            * Remove video only if subscribed to participant track
            */
            if (remoteVideoTrackPublication.isTrackSubscribed()) {

                this.removeParticipantVideo(remoteVideoTrackPublication.getRemoteVideoTrack());

            }

        }

    }

    /*
     * Set primary view as renderer for participant video track
     */
    public addRemoteParticipantVideo(videoTrack) {

        this.remoteVideoView.setMirror(true);

        videoTrack.addRenderer(this.remoteVideoView);

    }

    public destroy_local_video() {

        this.localVideoTrack.removeRenderer(this.localVideoView);

        this.localVideoTrack = null

    }


    disconnect() {

        this.room.disconnect();

    }

    public cameraListener() {
        
		const self = this;

        return new CameraCapturer.Listener({
            onFirstFrameAvailable() {
                self._event.notify({
                    eventName: 'videoViewDidReceiveData',
                    object: fromObject({
                        view: 'view',
                    })
                })
            },
            onError(e) {
                self.onError(e);
            }
        });
    }


    public roomListener() {

        let self = this;



        return new Room.Listener({

            onConnected(room) {

                var list = room.getRemoteParticipants();

                self.localParticipant = room.getLocalParticipant();



                self._event.notify({
                    eventName: 'didConnectToRoom',
                    object: fromObject({
                        room: room,
                        count: list.size()
                    })
                });

                for (var i = 0, l = list.size(); i < l; i++) {

                    var participant = list.get(i);

                    if (participant.getVideoTracks().size() > 0) {

                        self.addRemoteParticipant(participant);

                    }

                }

            },

            onConnectFailure(room, error) {
                if (self.audioManager)
                    self.configure_audio(false);
                self._event.notify({
                    eventName: 'didFailToConnectWithError',
                    object: fromObject({
                        room: room,
                        error: error
                    })
                })
            },

            onDisconnected(room, error) {
                self.room = '';
                self.localParticipant = null;
                if (self.audioManager)
                    self.configure_audio(false)
                if (self._event) {
                    self._event.notify({
                        eventName: 'onDisconnected',
                        object: fromObject({
                            room: room,
                            error: error
                        })
                    })
                }
            },

            onParticipantConnected(room, participant) {

                self._event.notify({
                    eventName: 'participantDidConnect',
                    object: fromObject({
                        room: room,
                        participant: participant,
                        count: participant.getRemoteVideoTracks().size()
                    })
                });
                self.addRemoteParticipant(participant);
            },

            onParticipantDisconnected(room, participant) {
                self._event.notify({
                    eventName: 'participantDidDisconnect',
                    object: fromObject({
                        room: room,
                        participant: participant
                    })
                });
                self.removeRemoteParticipant(participant);
            },

            onRecordingStarted(room) {
                /*
                 * Indicates when media shared to a Room is being recorded. Note that
                 * recording is only available in our Group Rooms developer preview.
                 */
                // if (self._event) {
                //     self._event.notify({
                //         eventName: 'onRecordingStarted',
                //         object: fromObject({
                //             room: room
                //         })
                //     })
                // }
            },

            onRecordingStopped(room) {
                // if (self._event) {
                //     self._event.notify({
                //         eventName: 'onRecordingStopped',
                //         object: fromObject({
                //             room: room
                //         })
                //     })
                // }
            }

        });
    }

    public participantListener() {
        let self = this;
        return new Participant.Listener({
            onAudioTrackPublished(participant, publication) {
                self._event.notify({
                    eventName: 'participantPublishedAudioTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },
            onAudioTrackUnpublished(participant, publication) {
                self._event.notify({
                    eventName: 'participantUnpublishedAudioTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },
            onVideoTrackPublished(participant, publication) {
                self._event.notify({
                    eventName: 'participantPublishedVideoTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },
            onVideoTrackUnpublished(participant, publication) {
                self._event.notify({
                    eventName: 'participantUnpublishedVideoTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },
            onAudioTrackSubscribed(remoteParticipant, remoteAudioTrackPublication, remoteAudioTrack) {
                self._event.notify({
                    eventName: 'onAudioTrackSubscribed',
                    object: fromObject({
                        participant: remoteParticipant,
                        publication: remoteAudioTrackPublication,
                        audioTrack: remoteAudioTrack
                    })
                })

            },
            onAudioTrackUnsubscribed(remoteParticipant, remoteAudioTrackPublication, remoteAudioTrack) {
                self._event.notify({
                    eventName: 'onAudioTrackUnsubscribed',
                    object: fromObject({
                        participant: remoteParticipant,
                        publication: remoteAudioTrackPublication,
                        audioTrack: remoteAudioTrack
                    })
                })

            },
            onVideoTrackSubscribed(remoteParticipant, remoteVideoTrackPublication, remoteVideoTrack) {
                self.addRemoteParticipantVideo(remoteVideoTrack);
                self._event.notify({
                    eventName: 'onVideoTrackSubscribed',
                    object: fromObject({
                        participant: remoteParticipant,
                        publication: remoteVideoTrackPublication,
                        videoTrack: remoteVideoTrack
                    })
                })
            },
            onVideoTrackUnsubscribed(remoteParticipant, remoteVideoTrackPublication, remoteVideoTrack) {
                self.removeParticipantVideo(remoteVideoTrack);
                self._event.notify({
                    eventName: 'onVideoTrackUnsubscribed',
                    object: fromObject({
                        participant: remoteParticipant,
                        publication: remoteVideoTrackPublication,
                        videoTrack: remoteVideoTrack
                    })
                })

            },

            onVideoTrackDisabled(participant, publication) {
                self._event.notify({
                    eventName: 'participantDisabledVideoTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },

            onVideoTrackEnabled(participant, publication) {
                self._event.notify({
                    eventName: 'participantEnabledVideoTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },

            onAudioTrackDisabled(participant, publication) {
                self._event.notify({
                    eventName: 'participantDisabledAudioTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            },

            onAudioTrackEnabled(participant, publication) {
                self._event.notify({
                    eventName: 'participantEnabledAudioTrack',
                    object: fromObject({
                        participant: participant,
                        publication: publication
                    })
                })
            }

        });
    }

    public configure_audio(enable: boolean) {

        if (enable) {

            this.previousAudioMode = this.audioManager.getMode();

            // Request audio focus before making any device switch.
            // this.audioManager.requestAudioFocus(null, AudioManager.STREAM_VOICE_CALL, AudioManager.AUDIOFOCUS_GAIN_TRANSIENT);
            this.requestAudioFocus();
            /*
             * Use MODE_IN_COMMUNICATION as the default audio mode. It is required
             * to be in this mode when playout and/or recording starts for the best
             * possible VoIP performance. Some devices have difficulties with
             * speaker mode if this is not set.
             */

            this.audioManager.setMode(AudioManager.MODE_IN_COMMUNICATION);

            /*
             * Always disable microphone mute during a WebRTC call.
             */

            this.previousMicrophoneMute = this.audioManager.isMicrophoneMute();
            this.audioManager.setMicrophoneMute(false);

        } else {

            this.audioManager.setMode(this.previousAudioMode);
            this.audioManager.abandonAudioFocus(null);
            this.audioManager.setMicrophoneMute(this.previousMicrophoneMute);

        }
    }

    public requestAudioFocus() {

        if (android.os.Build.VERSION.SDK_INT >= 25) {

            // var playbackAttributes = new AudioAttributes.Builder()
            //     .setUsage(AudioAttributes.USAGE_VOICE_COMMUNICATION)
            //     .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
            //     .build();

            // this.onError('playbackAttributes');

            // var focusRequest = new AudioFocusRequest.Builder(AudioManager.AUDIOFOCUS_GAIN_TRANSIENT)
            //     .setAudioAttributes(playbackAttributes)
            //     .setAcceptsDelayedFocusGain(true)
            //     .setOnAudioFocusChangeListener(
            //         new AudioManager.OnAudioFocusChangeListener({
            //             onAudioFocusChange(i) {
            //                 console.log(i);
            //             }
            //     }).build());

            // this.onError('focusRequest');

            // this.audioManager.requestAudioFocus(focusRequest);

        } else {

            this.audioManager.requestAudioFocus(null, AudioManager.STREAM_VOICE_CALL, AudioManager.AUDIOFOCUS_GAIN_TRANSIENT);

        }
		
    }

    public set_access_token(token: string) {

        this.TWILIO_ACCESS_TOKEN = token;

    }

    public toggle_local_video() {

        if (this.localVideoTrack) {

            let enable = !this.localVideoTrack.isEnabled();

            this.localVideoTrack.enable(enable);

        }

    }

    public toggle_local_audio() {

        if (this.localAudioTrack) {

            let enabled = !this.localAudioTrack.isEnabled();

            this.localAudioTrack.enable(enabled);

        }

    }

}