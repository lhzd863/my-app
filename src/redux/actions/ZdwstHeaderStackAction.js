import ZDWST_HEADER_STACK_TYPE from "../types/ZdwstHeaderStackType.js";

const ZdwstHeaderStackAction = (stackarr)=> {
   return {
      type: ZDWST_HEADER_STACK_TYPE,
      stackarr
   };
};

export default ZdwstHeaderStackAction;


