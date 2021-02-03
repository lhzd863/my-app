import STAT_CUR_NUM_TYPE from "../types/StatCurNumType.js";

const StatCurNumAction = (stat_cur_num)=> {
   return {
      type: STAT_CUR_NUM_TYPE,
      data: stat_cur_num
   };
};

export default StatCurNumAction;


