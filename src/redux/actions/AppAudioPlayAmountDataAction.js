import APP_AUDIO_PLAY_AMOUNT_TYPE from "../types/AppAudioPlayAmountType.js";

const AppAudioPlayAmountDataAction = (audio_play_amount)=> {
   return {
      type: APP_AUDIO_PLAY_AMOUNT_TYPE,
      data: audio_play_amount
   };
};

export default AppAudioPlayAmountDataAction;


