import YAXIS6_DATA_TYPE from "../types/Yaxis6DataType.js";

const Yaxis6DataAction = (yaxis6)=> {
   return {
      type: YAXIS6_DATA_TYPE,
      yaxis6
   };
};


export default Yaxis6DataAction;


