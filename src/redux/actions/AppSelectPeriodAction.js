import APP_SELECT_PERIOD_TYPE from "../types/AppSelectPeriodType.js";

const AppSelectPeriodDataAction = (select_period)=> {
   return {
      type: APP_SELECT_PERIOD_TYPE,
      data: select_period
   };
};

export default AppSelectPeriodDataAction;


