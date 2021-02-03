import LOADING_ENABLE_DATA_TYPE from "../types/LoadingEnableDataType.js";

const LoadingEnableDataAction = (loading_enable)=> {
   return {
      type: LOADING_ENABLE_DATA_TYPE,
      data: loading_enable
   };
};

export default LoadingEnableDataAction;


