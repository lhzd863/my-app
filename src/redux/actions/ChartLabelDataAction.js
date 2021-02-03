import CHART_LABEL_DATA_TYPE from "../types/ChartLabelDataType.js";

const ChartLabelDataAction = (chart_label)=> {
   return {
      type: CHART_LABEL_DATA_TYPE,
      data: chart_label
   };
};

export default ChartLabelDataAction;


