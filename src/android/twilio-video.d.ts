import { Observable } from 'tns-core-modules/data/observable';
// import { VideoActivityBase } from '../twilio-common';
import { RemoteVideo } from './remoteVideo';
import { LocalVideo } from './localVideo';
import { LocalVideoTrack, LocalAudioTrack, CameraCapturer, Room, LocalParticipant, AudioManager, RemoteParticipant } from './twilio-classes';

declare const com, android;

export declare class VideoActivityBase {

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
    // readonly event: Observable;
    connectToRoom(roomName: string, options: {
        video: boolean;
        audio: boolean;
    }): void;
	toggleSpeakerPhone(bool: boolean): void;
	isSpeakerPhoneOn(): boolean;
	addRemoteParticipant(remoteParticipant: RemoteParticipant): void;
    startPreview(): void;
    onError(reason: string): void;
	removeParticipantVideo(videoTrack: VideoTrack): void;
    removeRemoteParticipant(remoteParticipant: RemoteParticipant): void;
	addRemoteParticipantVideo(videoTrack: VideoTrack): void;
    destroyLocalVideo(): void;
    disconnect(): void;
    cameraListener(): void;
    roomListener(): void;
    participantListener(): void;
    configureAudio(enable: boolean): void;
    requestAudioFocus(): void;
    setAccessToken(token: string): void;
    toggleLocalVideo(): void;
    toggleLocalAudio(): void;
}
