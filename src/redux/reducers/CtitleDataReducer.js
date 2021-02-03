import CTITLE_DATA_TYPE from '../types/CtitleDataType.js';

const CtitleDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CTITLE_DATA_TYPE:
            return Object.assign({}, state, { ctitle: action.data });
        default:
            return state;
    }
};


const initialState = {
    ctitle: ''
};

export default CtitleDataReducer;
