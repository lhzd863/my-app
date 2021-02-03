import ZDWST_STATE_VERSION_TYPE from "../types/ZdwstStateVersionType.js";

const ZdwstStateVersionAction = (version = 0.1)=> {
   return {
      type: ZDWST_STATE_VERSION_TYPE,
      payload : version
   };
};

export default ZdwstStateVersionAction;


