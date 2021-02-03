import TXT2AUDIO_TEXT_TYPE from "../types/Txt2AudioTextType.js";

const Txt2AudioTextAction = (txt2audio_text)=> {
   return {
      type: TXT2AUDIO_TEXT_TYPE,
      data: txt2audio_text
   };
};

export default Txt2AudioTextAction;


