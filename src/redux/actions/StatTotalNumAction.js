import STAT_TOTAL_NUM_TYPE from "../types/StatTotalNumType.js";

const StatTotalNumAction = (stat_total_num)=> {
   return {
      type: STAT_TOTAL_NUM_TYPE,
      data: stat_total_num
   };
};

export default StatTotalNumAction;


