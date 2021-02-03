import LEASTSQ_BVAL_DATA_TYPE from '../types/LeastsqBvalDataType.js';

const LeastsqBvalReducer = (state = initialState,action)=>{
    switch(action.type){
        case LEASTSQ_BVAL_DATA_TYPE:
            return Object.assign({}, state, { bval: action.data });
        default:
            return state;
    }
};


const initialState = {
    bval: ''
};

export default LeastsqBvalReducer;
