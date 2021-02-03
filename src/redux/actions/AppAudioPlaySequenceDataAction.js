import APP_AUDIO_PLAY_SEQUENCE_TYPE from "../types/AppAudioPlaySequenceType.js";

const AppAudioPlaySequenceDataAction = (audio_play_sequence)=> {
   return {
      type: APP_AUDIO_PLAY_SEQUENCE_TYPE,
      data: audio_play_sequence
   };
};

export default AppAudioPlaySequenceDataAction;


