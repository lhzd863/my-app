import YAXIS3_DATA_TYPE from "../types/Yaxis3DataType.js";

const Yaxis3DataAction = (yaxis3)=> {
   return {
      type: YAXIS3_DATA_TYPE,
      yaxis3
   };
};

export default Yaxis3DataAction;


