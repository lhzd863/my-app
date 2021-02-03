import YAXIS9_DATA_TYPE from "../types/Yaxis9DataType.js";

const Yaxis9DataAction = (yaxis9)=> {
   return {
      type: YAXIS9_DATA_TYPE,
      yaxis9
   };
};

export default Yaxis9DataAction;


