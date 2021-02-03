import ARRAY_DATA1_TYPE from "../types/ArrayData1Type.js";


const ArrayData1Action = (yaxis)=> {
   return {
      type: ARRAY_DATA1_TYPE,
      yaxis
   };
};


export default ArrayData1Action;


