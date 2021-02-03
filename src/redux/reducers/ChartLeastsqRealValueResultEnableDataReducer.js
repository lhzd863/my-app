import CHART_LEASTSQ_REAL_VALUE_RESULT_ENABLE_DATA_TYPE from '../types/ChartLeastsqRealValueResultEnableDataType.js';

const ChartLeastsqRealValueResultEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LEASTSQ_REAL_VALUE_RESULT_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_leastsq_real_value_result_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_leastsq_real_value_result_enable: false
};

export default ChartLeastsqRealValueResultEnableDataReducer;
