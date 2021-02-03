import APP_AUDIO_PLAY_NAME_TYPE from "../types/AppAudioPlayNameType.js";

const AppAudioPlayNameDataAction = (audio_play_name)=> {
   return {
      type: APP_AUDIO_PLAY_NAME_TYPE,
      data: audio_play_name
   };
};

export default AppAudioPlayNameDataAction;


