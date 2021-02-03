import STAT_CUR_IP_NUM_TYPE from "../types/StatCurIpNumType.js";

const StatCurIpNumAction = (stat_cur_ip_num)=> {
   return {
      type: STAT_CUR_IP_NUM_TYPE,
      data: stat_cur_ip_num
   };
};

export default StatCurIpNumAction;


