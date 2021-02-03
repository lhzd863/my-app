import XAXIS0_DATA_TYPE from "../types/Xaxis0DataType.js";

const Xaxis0DataAction = (xaxis0)=> {
   return {
      type: XAXIS0_DATA_TYPE,
      xaxis0
   };
};

export default Xaxis0DataAction;


