import ARRAY_DATA_TYPE from "../types/ArrayDataType.js";

const ArrayDataAction = (data)=> {
   return {
      type: ARRAY_DATA_TYPE,
      data
   };
};


export default ArrayDataAction;
