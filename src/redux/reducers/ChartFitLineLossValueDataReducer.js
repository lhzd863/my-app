import CHART_FITLINE_LOSS_VALUE_DATA_TYPE from '../types/ChartFitLineLossValueDataType.js';

const ChartFitLineLossValueDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_FITLINE_LOSS_VALUE_DATA_TYPE:
            return Object.assign({}, state, { chart_fitline_loss_value: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_fitline_loss_value: '0.00001'
};

export default ChartFitLineLossValueDataReducer;
