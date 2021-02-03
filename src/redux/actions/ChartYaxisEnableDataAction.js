import CHART_YAXIS_ENABLE_DATA_TYPE from "../types/ChartYaxisEnableDataType.js";

const ChartYaxisEnableDataAction = (chart_yaxis_enable)=> {
   return {
      type: CHART_YAXIS_ENABLE_DATA_TYPE,
      data: chart_yaxis_enable
   };
};

export default ChartYaxisEnableDataAction;


