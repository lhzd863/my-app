import APP_AUDIO_PLAY_STATUS_TYPE from "../types/AppAudioPlayStatusType.js";

const AppAudioPlayStatusDataAction = (audio_play_status)=> {
   return {
      type: APP_AUDIO_PLAY_STATUS_TYPE,
      data: audio_play_status
   };
};

export default AppAudioPlayStatusDataAction;


