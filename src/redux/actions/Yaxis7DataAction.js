import YAXIS7_DATA_TYPE from "../types/Yaxis7DataType.js";

const Yaxis7DataAction = (yaxis7)=> {
   return {
      type: YAXIS7_DATA_TYPE,
      yaxis7
   };
};

export default Yaxis7DataAction;


