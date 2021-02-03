import CHART_FITLINE_OPTIMIZED_TIME_DATA_TYPE from "../types/ChartFitLineOptimizedTimeDataType.js";

const ChartFitLineOptimizedTimeDataAction = (chart_fitline_optimized_time)=> {
   return {
      type: CHART_FITLINE_OPTIMIZED_TIME_DATA_TYPE,
      data: chart_fitline_optimized_time
   };
};

export default ChartFitLineOptimizedTimeDataAction;


