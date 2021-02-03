import ARRAY_DATA_TYPE from '../types/ArrayDataType.js';

const ArrayDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case ARRAY_DATA_TYPE:
            return action.data;
        default:
            return state;
    }
};


const initialState = {
    data: []
};

export default ArrayDataReducer;
