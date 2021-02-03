import TXT2AUDIO_VOLUME_TYPE from "../types/Txt2AudioVolumeType.js";

const Txt2AudioVolumeAction = (txt2audio_volume)=> {
   return {
      type: TXT2AUDIO_VOLUME_TYPE,
      data: txt2audio_volume
   };
};

export default Txt2AudioVolumeAction;


