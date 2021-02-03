import YAXIS4_DATA_TYPE from "../types/Yaxis4DataType.js";

const Yaxis4DataAction = (yaxis4)=> {
   return {
      type: YAXIS4_DATA_TYPE,
      yaxis4
   };
};

export default Yaxis4DataAction;


