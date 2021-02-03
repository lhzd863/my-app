import APP_AUDIO_PLAY_URL_TYPE from "../types/AppAudioPlayUrlType.js";

const AppAudioPlayUrlDataAction = (audio_play_url)=> {
   return {
      type: APP_AUDIO_PLAY_URL_TYPE,
      data: audio_play_url
   };
};

export default AppAudioPlayUrlDataAction;


