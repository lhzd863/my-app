import CHART_LABEL_ENABLE_DATA_TYPE from '../types/ChartLabelEnableDataType.js';

const ChartLabelEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LABEL_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_label_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_label_enable: true
};

export default ChartLabelEnableDataReducer;
