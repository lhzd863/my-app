import APP_REGION_TYPE from "../types/AppRegionType.js";

const AppRegionDataAction = (region)=> {
   return {
      type: APP_REGION_TYPE,
      data: region
   };
};

export default AppRegionDataAction;


