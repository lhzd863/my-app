import CHART_TITLE_ENABLE_DATA_TYPE from "../types/ChartTitleEnableDataType.js";

const ChartTitleEnableDataAction = (chart_title_enable)=> {
   return {
      type: CHART_TITLE_ENABLE_DATA_TYPE,
      data: chart_title_enable
   };
};

export default ChartTitleEnableDataAction;


