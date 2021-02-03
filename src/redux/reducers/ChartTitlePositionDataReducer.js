import CHART_TITLE_POSITION_DATA_TYPE from '../types/ChartTitlePositionDataType.js';

const ChartTitlePositionDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_TITLE_POSITION_DATA_TYPE:
            return Object.assign({}, state, { chart_title_position: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_title_position: 'top'
};

export default ChartTitlePositionDataReducer;
