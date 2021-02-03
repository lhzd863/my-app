import XAXIS1_DATA_TYPE from "../types/Xaxis1DataType.js";

const Xaxis1DataAction = (xaxis1)=> {
   return {
      type: XAXIS1_DATA_TYPE,
      xaxis1
   };
};

export default Xaxis1DataAction;


