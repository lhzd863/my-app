import DISPLAY_CONSOLE_DATA_TYPE from '../types/DisplayConsoleDataType.js';

const DisplayConsoleDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case DISPLAY_CONSOLE_DATA_TYPE:
            return Object.assign({}, state, { display_console: action.data });
        default:
            return state;
    }
};


const initialState = {
    display_console: 'none'
};

export default DisplayConsoleDataReducer;
