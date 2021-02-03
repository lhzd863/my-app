import LEASTSQ_CALVAL_DATA_TYPE from '../types/LeastsqCalvalDataType.js';

const LeastsqCalvalReducer = (state = initialState,action)=>{
    switch(action.type){
        case LEASTSQ_CALVAL_DATA_TYPE:
            return Object.assign({}, state, { calval: action.data });
        default:
            return state;
    }
};


const initialState = {
    calval: ''
};

export default LeastsqCalvalReducer;
