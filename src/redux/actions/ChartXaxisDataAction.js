import CHART_XAXIS_DATA_TYPE from "../types/ChartXaxisDataType.js";

const ChartXaxisDataAction = (chart_xaxis)=> {
   return {
      type: CHART_XAXIS_DATA_TYPE,
      data: chart_xaxis
   };
};

export default ChartXaxisDataAction;


