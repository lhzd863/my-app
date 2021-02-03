import STAT_IP_NUM_TYPE from "../types/StatIpNumType.js";

const StatIpNumAction = (stat_ip_num)=> {
   return {
      type: STAT_IP_NUM_TYPE,
      data: stat_ip_num
   };
};

export default StatIpNumAction;


