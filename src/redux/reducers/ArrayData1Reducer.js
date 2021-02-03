import ARRAY_DATA1_TYPE from '../types/ArrayData1Type.js';


const ArrayData1Reducer= (state = initialState.ydata,action)=>{
    switch(action.type){
        case ARRAY_DATA1_TYPE:
            return action.yaxis;
        default:
            return state;
    }
};

const initialState = {
    ydata: []
};

export default ArrayData1Reducer;
