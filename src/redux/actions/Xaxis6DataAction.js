import XAXIS6_DATA_TYPE from "../types/Xaxis6DataType.js";

const Xaxis6DataAction = (xaxis6)=> {
   return {
      type: XAXIS6_DATA_TYPE,
      xaxis6
   };
};

export default Xaxis6DataAction;


