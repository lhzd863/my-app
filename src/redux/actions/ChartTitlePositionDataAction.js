import CHART_TITLE_POSITION_DATA_TYPE from "../types/ChartTitlePositionDataType.js";

const ChartTitlePositionDataAction = (chart_title_position)=> {
   return {
      type: CHART_TITLE_POSITION_DATA_TYPE,
      data: chart_title_position
   };
};

export default ChartTitlePositionDataAction;


