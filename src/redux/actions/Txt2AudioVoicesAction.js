import TXT2AUDIO_VOICES_TYPE from "../types/Txt2AudioVoicesType.js";

const Txt2AudioVoicesAction = (txt2audio_voices)=> {
   return {
      type: TXT2AUDIO_VOICES_TYPE,
      data: txt2audio_voices
   };
};

export default Txt2AudioVoicesAction;


