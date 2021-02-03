import CHART_XAXIS_DATA_TYPE from '../types/ChartXaxisDataType.js';

const ChartXaxisDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_XAXIS_DATA_TYPE:
            return Object.assign({}, state, { chart_xaxis: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_xaxis: ''
};

export default ChartXaxisDataReducer;
