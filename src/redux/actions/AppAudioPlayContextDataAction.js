import APP_AUDIO_PLAY_CONTEXT_TYPE from "../types/AppAudioPlayContextType.js";

const AppAudioPlayContextDataAction = (audio_play_context)=> {
   return {
      type: APP_AUDIO_PLAY_CONTEXT_TYPE,
      data: audio_play_context
   };
};

export default AppAudioPlayContextDataAction;


