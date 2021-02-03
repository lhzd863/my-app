import DISPLAY_NAME_DATA_TYPE from "../types/DisplayNameDataType.js";

const DisplayNameDataAction = (display_name)=> {
   return {
      type: DISPLAY_NAME_DATA_TYPE,
      data: display_name
   };
};

export default DisplayNameDataAction;


