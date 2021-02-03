import ARRAY_DATA3_TYPE from '../types/ArrayData3Type.js';

const ArrayData3Reducer= (state = initialState.zdata,action)=>{
    switch(action.type){
        case ARRAY_DATA3_TYPE:
            return action.zaxis;
        default:
            return state;
    }
};


const initialState = {
    zdata: []
};

export default ArrayData3Reducer;
