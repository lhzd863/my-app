import STAT_DT_TYPE from "../types/StatDtType.js";

const StatDtAction = (stat_dt)=> {
   return {
      type: STAT_DT_TYPE,
      data: stat_dt
   };
};

export default StatDtAction;


