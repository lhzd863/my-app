import APP_TAG_TYPE from "../types/AppTagType.js";

const AppTagDataAction = (tag)=> {
   return {
      type: APP_TAG_TYPE,
      data: tag
   };
};

export default AppTagDataAction;


