import CHART_WINDOW_HEIGHT_DATA_TYPE from '../types/ChartWindowHeightDataType.js';

const ChartWindowHeightDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_WINDOW_HEIGHT_DATA_TYPE:
            return Object.assign({}, state, { chart_window_height: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_window_height: 70
};

export default ChartWindowHeightDataReducer;
