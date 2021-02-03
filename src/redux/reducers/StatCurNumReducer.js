import STAT_CUR_NUM_TYPE from '../types/StatCurNumType.js';

const StatCurNumReducer= (state = initialState,action)=>{
    switch(action.type){
        case STAT_CUR_NUM_TYPE:
            return Object.assign({}, state, { stat_cur_num: action.data });
        default:
            return state;
    }
};


const initialState = {
    stat_cur_num: 0 
};

export default StatCurNumReducer;
