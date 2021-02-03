import DIALOG_VISIBLE_DATA_TYPE from "../types/DialogVisibleDataType.js";

const DisplayConsoleDataAction = (dialogvisible)=> {
   return {
      type: DIALOG_VISIBLE_DATA_TYPE,
      data: dialogvisible
   };
};

export default DisplayConsoleDataAction;


