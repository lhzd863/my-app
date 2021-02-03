import TXT2AUDIO_RATE_TYPE from "../types/Txt2AudioRateType.js";

const Txt2AudioRateAction = (txt2audio_rate)=> {
   return {
      type: TXT2AUDIO_RATE_TYPE,
      data: txt2audio_rate
   };
};

export default Txt2AudioRateAction;


