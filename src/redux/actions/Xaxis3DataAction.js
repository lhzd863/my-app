import XAXIS3_DATA_TYPE from "../types/Xaxis3DataType.js";

const Xaxis3DataAction = (xaxis3)=> {
   return {
      type: XAXIS3_DATA_TYPE,
      xaxis3
   };
};

export default Xaxis3DataAction;


