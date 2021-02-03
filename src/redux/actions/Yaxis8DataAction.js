import YAXIS8_DATA_TYPE from "../types/Yaxis8DataType.js";

const Yaxis8DataAction = (yaxis8)=> {
   return {
      type: YAXIS8_DATA_TYPE,
      yaxis8
   };
};

export default Yaxis8DataAction;


