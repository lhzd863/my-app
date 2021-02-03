import STAT_CUR_IP_NUM_TYPE from '../types/StatCurIpNumType.js';

const StatCurIpNumReducer= (state = initialState,action)=>{
    switch(action.type){
        case STAT_CUR_IP_NUM_TYPE:
            return Object.assign({}, state, { stat_cur_ip_num: action.data });
        default:
            return state;
    }
};


const initialState = {
    stat_cur_ip_num: 0 
};

export default StatCurIpNumReducer;
