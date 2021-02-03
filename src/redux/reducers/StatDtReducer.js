import STAT_DT_TYPE from '../types/StatDtType.js';

const StatDtReducer= (state = initialState,action)=>{
    switch(action.type){
        case STAT_DT_TYPE:
            return Object.assign({}, state, { stat_dt: action.data });
        default:
            return state;
    }
};


const initialState = {
    stat_dt: ''
};

export default StatDtReducer;
