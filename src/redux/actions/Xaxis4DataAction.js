import XAXIS4_DATA_TYPE from "../types/Xaxis4DataType.js";

const Xaxis4DataAction = (xaxis4)=> {
   return {
      type: XAXIS4_DATA_TYPE,
      xaxis4
   };
};

export default Xaxis4DataAction;


