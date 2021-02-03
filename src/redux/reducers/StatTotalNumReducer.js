import STAT_TOTAL_NUM_TYPE from '../types/StatTotalNumType.js';

const StatTotalNumReducer= (state = initialState,action)=>{
    switch(action.type){
        case STAT_TOTAL_NUM_TYPE:
            return Object.assign({}, state, { stat_total_num: action.data });
        default:
            return state;
    }
};


const initialState = {
    stat_total_num: 0 
};

export default StatTotalNumReducer;
