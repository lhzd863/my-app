import CHART_YAXIS_DATA_TYPE from '../types/ChartYaxisDataType.js';

const ChartYaxisDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_YAXIS_DATA_TYPE:
            return Object.assign({}, state, { chart_yaxis: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_yaxis: ''
};

export default ChartYaxisDataReducer;
