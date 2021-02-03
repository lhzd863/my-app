import ARRAY_CONSOLE_DATA_TYPE from '../types/ArrayConsoleDataType.js';

const ArrayConsoleDataReducer= (state = initialState.cdata,action)=>{
    switch(action.type){
        case ARRAY_CONSOLE_DATA_TYPE:
            return action.cdata;
        default:
            return state;
    }
};

const initialState = {
    cdata: []
};


export default ArrayConsoleDataReducer;
