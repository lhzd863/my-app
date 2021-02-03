import APP_AUDIO_PLAY_ANNOUNCER_TYPE from "../types/AppAudioPlayAnnouncerType.js";

const AppAudioPlayAnnouncerDataAction = (audio_play_announcer)=> {
   return {
      type: APP_AUDIO_PLAY_ANNOUNCER_TYPE,
      data: audio_play_announcer
   };
};

export default AppAudioPlayAnnouncerDataAction;


