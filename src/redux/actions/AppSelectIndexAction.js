import APP_SELECT_INDEX_TYPE from "../types/AppSelectIndexType.js";

const AppSelectIndexDataAction = (select_index)=> {
   return {
      type: APP_SELECT_INDEX_TYPE,
      data: select_index
   };
};

export default AppSelectIndexDataAction;


