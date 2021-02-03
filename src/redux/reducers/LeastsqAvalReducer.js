import LEASTSQ_AVAL_DATA_TYPE from '../types/LeastsqAvalDataType.js';

const LeastsqAvalReducer = (state = initialState,action)=>{
    switch(action.type){
        case LEASTSQ_AVAL_DATA_TYPE:
            return Object.assign({}, state, { aval: action.data });
        default:
            return state;
    }
};


const initialState = {
    aval: ''
};

export default LeastsqAvalReducer;
