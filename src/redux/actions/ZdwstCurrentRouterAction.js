import ZDWST_CURRENT_ROUTER_TYPE from "../types/ZdwstCurrentRouterType.js";

const ZdwstCurrentRouterAction = (zdwst_current_router)=> {
   return {
      type: ZDWST_CURRENT_ROUTER_TYPE,
      data: zdwst_current_router
   };
};

export default ZdwstCurrentRouterAction;


