import CHART_LABEL_DATA_TYPE from '../types/ChartLabelDataType.js';

const ChartLabelDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LABEL_DATA_TYPE:
            return Object.assign({}, state, { chart_label: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_label: 'label'
};

export default ChartLabelDataReducer;
