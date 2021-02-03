import APP_AUDIO_PLAY_AUTHOR_TYPE from "../types/AppAudioPlayAuthorType.js";

const AppAudioPlayAuthorDataAction = (audio_play_author)=> {
   return {
      type: APP_AUDIO_PLAY_AUTHOR_TYPE,
      data: audio_play_author
   };
};

export default AppAudioPlayAuthorDataAction;


