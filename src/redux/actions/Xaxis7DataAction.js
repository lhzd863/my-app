import XAXIS7_DATA_TYPE from "../types/Xaxis7DataType.js";

const Xaxis7DataAction = (xaxis7)=> {
   return {
      type: XAXIS7_DATA_TYPE,
      xaxis7
   };
};

export default Xaxis7DataAction;


