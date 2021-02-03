import YAXIS2_DATA_TYPE from "../types/Yaxis2DataType.js";

const Yaxis2DataAction = (yaxis2)=> {
   return {
      type: YAXIS2_DATA_TYPE,
      yaxis2
   };
};

export default Yaxis2DataAction;


