import APP_AUDIO_PLAY_IMG_TYPE from "../types/AppAudioPlayImgType.js";

const AppAudioPlayImgDataAction = (audio_play_img)=> {
   return {
      type: APP_AUDIO_PLAY_IMG_TYPE,
      data: audio_play_img
   };
};

export default AppAudioPlayImgDataAction;


