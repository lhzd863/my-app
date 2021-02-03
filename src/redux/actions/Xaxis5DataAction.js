import XAXIS5_DATA_TYPE from "../types/Xaxis5DataType.js";

const Xaxis5DataAction = (xaxis5)=> {
   return {
      type: XAXIS5_DATA_TYPE,
      xaxis5
   };
};

export default Xaxis5DataAction;


