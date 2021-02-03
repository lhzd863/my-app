import YAXIS5_DATA_TYPE from "../types/Yaxis5DataType.js";

const Yaxis5DataAction = (yaxis5)=> {
   return {
      type: YAXIS5_DATA_TYPE,
      yaxis5
   };
};

export default Yaxis5DataAction;


