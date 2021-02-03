import XAXIS2_DATA_TYPE from "../types/Xaxis2DataType.js";

const Xaxis2DataAction = (xaxis2)=> {
   return {
      type: XAXIS2_DATA_TYPE,
      xaxis2
   };
};

export default Xaxis2DataAction;


