import YAXIS1_DATA_TYPE from "../types/Yaxis1DataType.js";

const Yaxis1DataAction = (yaxis1)=> {
   return {
      type: YAXIS1_DATA_TYPE,
      yaxis1
   };
};

export default Yaxis1DataAction;


