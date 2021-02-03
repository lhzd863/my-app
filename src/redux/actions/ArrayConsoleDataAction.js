import ARRAY_CONSOLE_DATA_TYPE from "../types/ArrayConsoleDataType.js";

const ArrayConsoleDataAction = (cdata)=> {
   return {
      type: ARRAY_CONSOLE_DATA_TYPE,
      cdata
   };
};

export default ArrayConsoleDataAction;

