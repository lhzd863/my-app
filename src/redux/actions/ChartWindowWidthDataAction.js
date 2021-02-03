import CHART_WINDOW_WIDTH_DATA_TYPE from "../types/ChartWindowWidthDataType.js";

const ChartWindowWidthDataAction = (chart_window_width)=> {
   return {
      type: CHART_WINDOW_WIDTH_DATA_TYPE,
      data: chart_window_width
   };
};

export default ChartWindowWidthDataAction;


