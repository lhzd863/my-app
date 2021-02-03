import LBS_LATITUDE_TYPE from '../types/LbsLatitudeType.js';

const LbsLatitudeReducer= (state = initialState,action)=>{
    switch(action.type){
        case LBS_LATITUDE_TYPE:
            return Object.assign({}, state, { lbs_latitude: action.data });
        default:
            return state;
    }
};


const initialState = {
    lbs_latitude: '0'
};

export default LbsLatitudeReducer;
