import CHART_LEASTSQ_REAL_VALUE_DATA_TYPE from '../types/ChartLeastsqRealValueDataType.js';

const ChartLeastsqRealValueDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LEASTSQ_REAL_VALUE_DATA_TYPE:
            return Object.assign({}, state, { chart_leastsq_real_value: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_leastsq_real_value: '1'
};

export default ChartLeastsqRealValueDataReducer;
