import CHART_FITLINE_OPTIMIZED_TIME_DATA_TYPE from '../types/ChartFitLineOptimizedTimeDataType.js';

const ChartFitLineOptimizedTimeDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_FITLINE_OPTIMIZED_TIME_DATA_TYPE:
            return Object.assign({}, state, { chart_fitline_optimized_time: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_fitline_optimized_time: '20001'
};

export default ChartFitLineOptimizedTimeDataReducer;
