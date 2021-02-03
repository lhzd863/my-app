import DISPLAY_CONSOLE_DATA_TYPE from "../types/DisplayConsoleDataType.js";

const DisplayConsoleDataAction = (display_console)=> {
   return {
      type: DISPLAY_CONSOLE_DATA_TYPE,
      data: display_console
   };
};

export default DisplayConsoleDataAction;


