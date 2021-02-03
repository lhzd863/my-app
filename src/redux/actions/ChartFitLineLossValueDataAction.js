import CHART_FITLINE_LOSS_VALUE_DATA_TYPE from "../types/ChartFitLineLossValueDataType.js";

const ChartFitLineLossValueDataAction = (chart_fitline_loss_value)=> {
   return {
      type: CHART_FITLINE_LOSS_VALUE_DATA_TYPE,
      data: chart_fitline_loss_value
   };
};

export default ChartFitLineLossValueDataAction;


