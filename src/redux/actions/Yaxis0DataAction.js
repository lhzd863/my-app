import YAXIS0_DATA_TYPE from "../types/Yaxis0DataType.js";

const Yaxis0DataAction = (yaxis0)=> {
   return {
      type: YAXIS0_DATA_TYPE,
      yaxis0
   };
};

export default Yaxis0DataAction;


