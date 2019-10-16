import { View } from 'tns-core-modules/ui/core/view';
import * as utils from "tns-core-modules/utils/utils";

declare var com;

const VideoView = com.twilio.video.VideoView;

export class RemoteVideo extends VideoView {

    constructor() {
        super();

    }

    get android(): any {

        return this.nativeView;

    }

    public createNativeView() {

		return new com.twilio.video.VideoView(utils.ad.getApplicationContext());

    }


    public disposeNativeView() {

        this.nativeView = null;

    }


}