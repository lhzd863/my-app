import APP_AUDIO_PLAY_BACK_RATE_TYPE from "../types/AppAudioPlayBackRateType.js";

const AppAudioPlayBackRateDataAction = (audio_play_back_rate)=> {
   return {
      type: APP_AUDIO_PLAY_BACK_RATE_TYPE,
      data: audio_play_back_rate
   };
};

export default AppAudioPlayBackRateDataAction;


