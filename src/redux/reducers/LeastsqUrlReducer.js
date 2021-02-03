import LEASTSQ_URL_DATA_TYPE from '../types/LeastsqUrlDataType.js';

const LeastsqUrlReducer = (state = initialState,action)=>{
    switch(action.type){
        case LEASTSQ_URL_DATA_TYPE:
            return Object.assign({}, state, { url: action.data });
        default:
            return state;
    }
};


const initialState = {
    url: ''
};

export default LeastsqUrlReducer;
