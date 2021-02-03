import CHART_LEASTSQ_REAL_VALUE_DATA_TYPE from "../types/ChartLeastsqRealValueDataType.js";

const ChartLeastsqRealValueDataAction = (chart_leastsq_real_value)=> {
   return {
      type: CHART_LEASTSQ_REAL_VALUE_DATA_TYPE,
      data: chart_leastsq_real_value
   };
};

export default ChartLeastsqRealValueDataAction;


