import ARRAY_DATA3_TYPE from "../types/ArrayData3Type.js";

const ArrayData3Action = (zaxis)=> {
   return {
      type: ARRAY_DATA3_TYPE,
      zaxis
   };
};

export default ArrayData3Action;

