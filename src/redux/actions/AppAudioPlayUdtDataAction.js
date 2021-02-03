import APP_AUDIO_PLAY_UDT_TYPE from "../types/AppAudioPlayUdtType.js";

const AppAudioPlayUdtDataAction = (audio_play_udt)=> {
   return {
      type: APP_AUDIO_PLAY_UDT_TYPE,
      data: audio_play_udt
   };
};

export default AppAudioPlayUdtDataAction;


