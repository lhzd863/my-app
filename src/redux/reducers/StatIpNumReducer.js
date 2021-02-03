import STAT_IP_NUM_TYPE from '../types/StatIpNumType.js';

const StatIpNumReducer= (state = initialState,action)=>{
    switch(action.type){
        case STAT_IP_NUM_TYPE:
            return Object.assign({}, state, { stat_ip_num: action.data });
        default:
            return state;
    }
};


const initialState = {
    stat_ip_num: 0 
};

export default StatIpNumReducer;
