import CTITLE_DATA_TYPE from "../types/CtitleDataType.js";

const CtitleDataAction = (ctitle)=> {
   return {
      type: CTITLE_DATA_TYPE,
      data: ctitle
   };
};

export default CtitleDataAction;


