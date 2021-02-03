import ARRAY_DATA2_TYPE from '../types/ArrayData2Type.js';

const ArrayData2Reducer= (state = initialState.edata,action)=>{
    switch(action.type){
        case ARRAY_DATA2_TYPE:
            return action.edata;
        default:
            return state;
    }
};

const initialState = {
    edata: []
};


export default ArrayData2Reducer;
