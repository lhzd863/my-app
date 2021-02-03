import CHART_TITLE_DATA_TYPE from '../types/ChartTitleDataType.js';

const ChartTitleDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_TITLE_DATA_TYPE:
            return Object.assign({}, state, { chart_title: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_title: 'title'
};

export default ChartTitleDataReducer;
