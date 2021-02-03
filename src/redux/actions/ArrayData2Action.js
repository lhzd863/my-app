import ARRAY_DATA2_TYPE from "../types/ArrayData2Type.js";

const ArrayData2Action = (edata)=> {
   return {
      type: ARRAY_DATA2_TYPE,
      edata
   };
};

export default ArrayData2Action;

