import TXT2AUDIO_VOICE_TYPE from "../types/Txt2AudioVoiceType.js";

const Txt2AudioVoiceAction = (txt2audio_voice)=> {
   return {
      type: TXT2AUDIO_VOICE_TYPE,
      data: txt2audio_voice
   };
};

export default Txt2AudioVoiceAction;


