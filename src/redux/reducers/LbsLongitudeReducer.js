import LBS_LONGITUDE_TYPE from '../types/LbsLongitudeType.js';

const AppNewsTagDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case LBS_LONGITUDE_TYPE:
            return Object.assign({}, state, { lbs_longitude: action.data });
        default:
            return state;
    }
};


const initialState = {
    lbs_longitude: '0'
};

export default AppNewsTagDataReducer;
