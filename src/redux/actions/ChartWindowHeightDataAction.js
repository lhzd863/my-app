import CHART_WINDOW_HEIGHT_DATA_TYPE from "../types/ChartWindowHeightDataType.js";

const ChartWindowHeightDataAction = (chart_window_height)=> {
   return {
      type: CHART_WINDOW_HEIGHT_DATA_TYPE,
      data: chart_window_height
   };
};

export default ChartWindowHeightDataAction;


