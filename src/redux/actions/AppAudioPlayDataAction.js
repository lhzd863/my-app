import APP_AUDIO_PLAY_DATA_TYPE from "../types/AppAudioPlayDataType.js";

const AppAudioPlayDataAction = (audio_play)=> {
   return {
      type: APP_AUDIO_PLAY_DATA_TYPE,
      data: audio_play
   };
};

export default AppAudioPlayDataAction;


