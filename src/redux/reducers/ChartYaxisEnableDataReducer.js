import CHART_YAXIS_ENABLE_DATA_TYPE from '../types/ChartYaxisEnableDataType.js';

const ChartYaxisEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_YAXIS_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_yaxis_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_yaxis_enable: false
};

export default ChartYaxisEnableDataReducer;
