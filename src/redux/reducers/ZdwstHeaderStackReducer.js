import ZDWST_HEADER_STACK_TYPE from '../types/ZdwstHeaderStackType.js';

const ZdwstHeaderStackReducer= (state = initialState.stackarr,action)=>{
    switch(action.type){
        case ZDWST_HEADER_STACK_TYPE:
            return action.stackarr;
        default:
            return state;
    }
};


const initialState = {
    stackarr: []
};

export default ZdwstHeaderStackReducer;
