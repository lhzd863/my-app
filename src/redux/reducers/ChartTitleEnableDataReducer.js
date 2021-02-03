import CHART_TITLE_ENABLE_DATA_TYPE from '../types/ChartTitleEnableDataType.js';

const ChartTitleEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_TITLE_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_title_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_title_enable: false
};

export default ChartTitleEnableDataReducer;
