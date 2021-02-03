import CHART_YAXIS_DATA_TYPE from "../types/ChartYaxisDataType.js";

const ChartYaxisDataAction = (chart_yaxis)=> {
   return {
      type: CHART_YAXIS_DATA_TYPE,
      data: chart_yaxis
   };
};

export default ChartYaxisDataAction;


