import XAXIS8_DATA_TYPE from "../types/Xaxis8DataType.js";

const Xaxis8DataAction = (xaxis8)=> {
   return {
      type: XAXIS8_DATA_TYPE,
      xaxis8
   };
};

export default Xaxis8DataAction;


