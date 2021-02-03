import APP_AUDIO_PLAY_INFO_TYPE from "../types/AppAudioPlayInfoType.js";

const AppAudioPlayInfoDataAction = (audio_play_info)=> {
   return {
      type: APP_AUDIO_PLAY_INFO_TYPE,
      data: audio_play_info
   };
};

export default AppAudioPlayInfoDataAction;


