"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VideoActivity = (function () {
    function VideoActivity() {
    }
    VideoActivity.prototype.connect_to_room = function (roomName) {
        var connectOptions = TVIConnectOptions.init(this.accessToken);
        console.dir(connectOptions);
    };
    VideoActivity.prototype.configureAudio = function () {
    };
    VideoActivity.prototype.removeParticipantVideo = function () {
    };
    VideoActivity.prototype.participantListener = function () {
    };
    VideoActivity.prototype.removeParticipant = function () {
    };
    VideoActivity.prototype.addParticipantVideo = function () {
    };
    VideoActivity.prototype.addParticipant = function () {
    };
    VideoActivity.prototype.set_access_token = function () {
    };
    VideoActivity.prototype.disconnect_from_room = function () {
    };
    VideoActivity.prototype.roomListener = function () {
    };
    VideoActivity.prototype.createAudioAndVideoTracks = function () {
    };
    VideoActivity.prototype.toggle_local_video = function () {
    };
    VideoActivity.prototype.toggle_local_audio = function () {
    };
    VideoActivity.prototype.destroy_local_video = function () {
    };
    VideoActivity.prototype.destroy_local_audio = function () {
    };
    return VideoActivity;
}());
exports.VideoActivity = VideoActivity;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpbGlvLXZpZGVvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHdpbGlvLXZpZGVvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUE7SUFzQkk7SUFLQSxDQUFDO0lBRU0sdUNBQWUsR0FBdEIsVUFBdUIsUUFBZ0I7UUFJbkMsSUFBSSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBbUJoQyxDQUFDO0lBRU0sc0NBQWMsR0FBckI7SUFFQSxDQUFDO0lBRU0sOENBQXNCLEdBQTdCO0lBRUEsQ0FBQztJQUVNLDJDQUFtQixHQUExQjtJQUVBLENBQUM7SUFFTSx5Q0FBaUIsR0FBeEI7SUFFQSxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCO0lBRUEsQ0FBQztJQUVNLHNDQUFjLEdBQXJCO0lBRUEsQ0FBQztJQUVNLHdDQUFnQixHQUF2QjtJQUVBLENBQUM7SUFFTSw0Q0FBb0IsR0FBM0I7SUFFQSxDQUFDO0lBRU0sb0NBQVksR0FBbkI7SUFFQSxDQUFDO0lBR00saURBQXlCLEdBQWhDO0lBRUEsQ0FBQztJQUVNLDBDQUFrQixHQUF6QjtJQUVBLENBQUM7SUFFTSwwQ0FBa0IsR0FBekI7SUFFQSxDQUFDO0lBRU0sMkNBQW1CLEdBQTFCO0lBRUEsQ0FBQztJQUVNLDJDQUFtQixHQUExQjtJQUVBLENBQUM7SUFHTCxvQkFBQztBQUFELENBQUMsQUFqSEQsSUFpSEM7QUFqSFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFJlbW90ZVZpZGVvIH0gZnJvbSBcIi4vcmVtb3RlVmlkZW9cIjtcbmltcG9ydCB7IExvY2FsVmlkZW8gfSBmcm9tIFwiLi9sb2NhbFZpZGVvXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tT2JqZWN0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgVmlkZW9BY3Rpdml0eUJhc2UgfSBmcm9tIFwiLi4vdHdpbGlvLWNvbW1vblwiO1xuXG5kZWNsYXJlIHZhciBUVklDb25uZWN0T3B0aW9ucztcblxuZXhwb3J0IGNsYXNzIFZpZGVvQWN0aXZpdHkgaW1wbGVtZW50cyBWaWRlb0FjdGl2aXR5QmFzZSB7XG5cbiAgICBwcml2YXRlIFRXSUxJT19BQ0NFU1NfVE9LRU46IHN0cmluZztcbiAgICBwdWJsaWMgcHJldmlvdXNBdWRpb01vZGU6IGFueTtcbiAgICBwdWJsaWMgbG9jYWxWaWRlb1ZpZXc6IGFueTtcbiAgICBwdWJsaWMgcmVtb3RlVmlkZW9WaWV3OiBhbnk7XG4gICAgcHVibGljIGxvY2FsVmlkZW9UcmFjazogYW55O1xuICAgIHB1YmxpYyBsb2NhbEF1ZGlvVHJhY2s6IGFueTtcbiAgICBwdWJsaWMgY2FtZXJhQ2FwdHVyZXI6IGFueTtcbiAgICBwdWJsaWMgYWNjZXNzVG9rZW46IHN0cmluZztcbiAgICBwdWJsaWMgcm9vbTogc3RyaW5nO1xuICAgIHB1YmxpYyBwYXJ0aWNpcGFudElkZW50aXR5OiBzdHJpbmc7XG4gICAgcHVibGljIHByZXZpb3VzTWljcm9waG9uZU11dGU6IGJvb2xlYW47XG4gICAgcHVibGljIGxvY2FsUGFydGljaXBhbnQ6IGFueTtcbiAgICBwdWJsaWMgYXVkaW9NYW5hZ2VyOiBhbnk7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcbiAgICBwdWJsaWMgdmlkZW9FdmVudDogT2JzZXJ2YWJsZTtcbiAgICBwcml2YXRlIF9yb29tTGlzdGVuZXI6IGFueTtcbiAgICBwcml2YXRlIF9wYXJ0aWNpcGFudExpc3RlbmVyOiBhbnk7XG5cblxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgLy8gbGV0IGxvY2FsVmlkZW8gPSBuZXcgTG9jYWxWaWRlbygpO1xuICAgICAgICAvLyBsZXQgcmVtb3RlVmlkZW8gPSBuZXcgUmVtb3RlVmlkZW8oKTtcbiAgICAgICAgLy8gdGhpcy5sb2NhbFZpZGVvVmlldyA9IGxvY2FsVmlkZW8uZ2V0X2xvY2FsX3ZpZXcoKTtcbiAgICAgICAgLy8gdGhpcy5yZW1vdGVWaWRlb1ZpZXcgPSByZW1vdGVWaWRlby5nZXRfcmVtb3RlX3ZpZXcoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgY29ubmVjdF90b19yb29tKHJvb21OYW1lOiBzdHJpbmcpIHtcblxuICAgICAgICAvLyBzZWxmLnByZXBhcmVMb2NhbE1lZGlhKClcbiAgICAgICAgLy8gUHJlcGFyaW5nIHRoZSBjb25uZWN0IG9wdGlvbnMgd2l0aCB0aGUgYWNjZXNzIHRva2VuIHRoYXQgd2UgZmV0Y2hlZCAob3IgaGFyZGNvZGVkKS5cbiAgICAgICAgbGV0IGNvbm5lY3RPcHRpb25zID0gVFZJQ29ubmVjdE9wdGlvbnMuaW5pdCh0aGlzLmFjY2Vzc1Rva2VuKSAvL3sgKGJ1aWxkZXIpIGluXG4gICAgICAgIGNvbnNvbGUuZGlyKGNvbm5lY3RPcHRpb25zKTtcbiAgICAgICAgLy8gY29ubmVjdE9wdGlvbnMuYnVpbGRlci5hdWRpb1RyYWNrcyA9IFxuICAgICAgICAgICAgLy8gVXNlIHRoZSBsb2NhbCBtZWRpYSB0aGF0IHdlIHByZXBhcmVkIGVhcmxpZXIuXG4gICAgICAgIC8vIGJ1aWxkZXIuYXVkaW9UcmFja3MgPSBzZWxmLmxvY2FsQXVkaW9UcmFjayAhPSBuaWwgPyBbc2VsZi5sb2NhbEF1ZGlvVHJhY2shXSA6IFtUVklMb2NhbEF1ZGlvVHJhY2tdKClcbiAgICAgICAgLy8gYnVpbGRlci52aWRlb1RyYWNrcyA9IHNlbGYubG9jYWxWaWRlb1RyYWNrICE9IG5pbCA/IFtzZWxmLmxvY2FsVmlkZW9UcmFjayFdIDogW1RWSUxvY2FsVmlkZW9UcmFja10oKVxuXG4gICAgICAgIC8vIC8vIFRoZSBuYW1lIG9mIHRoZSBSb29tIHdoZXJlIHRoZSBDbGllbnQgd2lsbCBhdHRlbXB0IHRvIGNvbm5lY3QgdG8uIFBsZWFzZSBub3RlIHRoYXQgaWYgeW91IHBhc3MgYW4gZW1wdHlcbiAgICAgICAgLy8gLy8gUm9vbSBgbmFtZWAsIHRoZSBDbGllbnQgd2lsbCBjcmVhdGUgb25lIGZvciB5b3UuIFlvdSBjYW4gZ2V0IHRoZSBuYW1lIG9yIHNpZCBmcm9tIGFueSBjb25uZWN0ZWQgUm9vbS5cbiAgICAgICAgLy8gYnVpbGRlci5yb29tTmFtZSA9IHNlbGYucm9vbVRleHRGaWVsZC50ZXh0XG4gICAgLy8gfVxuXG4gICAgLy8gQ29ubmVjdCB0byB0aGUgUm9vbSB1c2luZyB0aGUgb3B0aW9ucyB3ZSBwcm92aWRlZC5cbiAgICAvLyByb29tID0gVHdpbGlvVmlkZW8uY29ubmVjdCh3aXRoOiBjb25uZWN0T3B0aW9ucywgZGVsZWdhdGU6IHNlbGYpXG4gICAgICAgIFxuICAgIC8vIGxvZ01lc3NhZ2UobWVzc2FnZVRleHQ6IFwiQXR0ZW1wdGluZyB0byBjb25uZWN0IHRvIHJvb20gXFwoU3RyaW5nKGRlc2NyaWJpbmc6IHNlbGYucm9vbVRleHRGaWVsZC50ZXh0KSlcIilcblxuICAgIC8vIHNlbGYuc2hvd1Jvb21VSShpblJvb206IHRydWUpXG4gICAgLy8gc2VsZi5kaXNtaXNzS2V5Ym9hcmQoKSAgICAgICAgXG5cbiAgICB9XG5cbiAgICBwdWJsaWMgY29uZmlndXJlQXVkaW8oKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlUGFydGljaXBhbnRWaWRlbygpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBwYXJ0aWNpcGFudExpc3RlbmVyKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZVBhcnRpY2lwYW50KCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFBhcnRpY2lwYW50VmlkZW8oKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUGFydGljaXBhbnQoKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0X2FjY2Vzc190b2tlbigpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNjb25uZWN0X2Zyb21fcm9vbSgpIHtcblxuICAgIH1cblxuICAgIHB1YmxpYyByb29tTGlzdGVuZXIoKSB7XG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBjcmVhdGVBdWRpb0FuZFZpZGVvVHJhY2tzKCkge1xuICAgICAgICAvLyBUVklDYW1lcmFDYXB0dXJlclxuICAgIH1cblxuICAgIHB1YmxpYyB0b2dnbGVfbG9jYWxfdmlkZW8oKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgdG9nZ2xlX2xvY2FsX2F1ZGlvKCkge1xuXG4gICAgfVxuXG4gICAgcHVibGljIGRlc3Ryb3lfbG9jYWxfdmlkZW8oKSB7XG5cbiAgICB9XG5cbiAgICBwdWJsaWMgZGVzdHJveV9sb2NhbF9hdWRpbygpIHtcblxuICAgIH1cblxuXG59Il19