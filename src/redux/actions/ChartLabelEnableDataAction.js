import CHART_LABEL_ENABLE_DATA_TYPE from "../types/ChartLabelEnableDataType.js";

const ChartLabelEnableDataAction = (chart_label_enable)=> {
   return {
      type: CHART_LABEL_ENABLE_DATA_TYPE,
      data: chart_label_enable
   };
};

export default ChartLabelEnableDataAction;


