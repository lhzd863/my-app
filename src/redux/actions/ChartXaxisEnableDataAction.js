import CHART_XAXIS_ENABLE_DATA_TYPE from "../types/ChartXaxisEnableDataType.js";

const ChartXaxisEnableDataAction = (chart_xaxis_enable)=> {
   return {
      type: CHART_XAXIS_ENABLE_DATA_TYPE,
      data: chart_xaxis_enable
   };
};

export default ChartXaxisEnableDataAction;


