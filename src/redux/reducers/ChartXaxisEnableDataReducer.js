import CHART_XAXIS_ENABLE_DATA_TYPE from '../types/ChartXaxisEnableDataType.js';

const ChartXaxisEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_XAXIS_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_xaxis_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_xaxis_enable: false
};

export default ChartXaxisEnableDataReducer;
