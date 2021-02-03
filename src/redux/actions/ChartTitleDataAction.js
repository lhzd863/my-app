import CHART_TITLE_DATA_TYPE from "../types/ChartTitleDataType.js";

const ChartTitleDataAction = (chart_title)=> {
   return {
      type: CHART_TITLE_DATA_TYPE,
      data: chart_title
   };
};

export default ChartTitleDataAction;


