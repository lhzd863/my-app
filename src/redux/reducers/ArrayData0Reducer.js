import ARRAY_DATA0_TYPE from '../types/ArrayData0Type.js';

const ArrayData0Reducer= (state = initialState.xdata,action)=>{
    switch(action.type){
        case ARRAY_DATA0_TYPE:
            return action.xaxis;
        default:
            return state;
    }
};


const initialState = {
    xdata: []
};

export default ArrayData0Reducer;
