import CHART_WINDOW_WIDTH_DATA_TYPE from '../types/ChartWindowWidthDataType.js';

const ChartWindowWidthDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_WINDOW_WIDTH_DATA_TYPE:
            return Object.assign({}, state, { chart_window_width: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_window_width: 100
};

export default ChartWindowWidthDataReducer;
