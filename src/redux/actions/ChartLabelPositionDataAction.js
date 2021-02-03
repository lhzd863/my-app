import CHART_LABEL_POSITION_DATA_TYPE from "../types/ChartLabelPositionDataType.js";

const ChartLabelPositionDataAction = (chart_label_position)=> {
   return {
      type: CHART_LABEL_POSITION_DATA_TYPE,
      data: chart_label_position
   };
};

export default ChartLabelPositionDataAction;


