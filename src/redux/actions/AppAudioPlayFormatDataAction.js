import APP_AUDIO_PLAY_FORMAT_TYPE from "../types/AppAudioPlayFormatType.js";

const AppAudioPlayFormatDataAction = (audio_play_format)=> {
   return {
      type: APP_AUDIO_PLAY_FORMAT_TYPE,
      data: audio_play_format
   };
};

export default AppAudioPlayFormatDataAction;


