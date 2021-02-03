import XAXIS9_DATA_TYPE from "../types/Xaxis9DataType.js";

const Xaxis9DataAction = (xaxis9)=> {
   return {
      type: XAXIS9_DATA_TYPE,
      xaxis9
   };
};

export default Xaxis9DataAction;


