import CHART_LABEL_POSITION_DATA_TYPE from '../types/ChartLabelPositionDataType.js';

const ChartLabelPositionDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LABEL_POSITION_DATA_TYPE:
            return Object.assign({}, state, { chart_label_position: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_label_position: 'top'
};

export default ChartLabelPositionDataReducer;
