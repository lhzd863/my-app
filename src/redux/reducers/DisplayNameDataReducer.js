import DISPLAY_NAME_DATA_TYPE from '../types/DisplayNameDataType.js';

const DisplayNameDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case DISPLAY_NAME_DATA_TYPE:
            return Object.assign({}, state, { display_name: action.data });
        default:
            return state;
    }
};


const initialState = {
    display_name: 'none'
};

export default DisplayNameDataReducer;
