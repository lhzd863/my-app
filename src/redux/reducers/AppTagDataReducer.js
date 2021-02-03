import APP_TAG_TYPE from '../types/AppTagType.js';

const AppTagDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_TAG_TYPE:
            return Object.assign({}, state, { tag: action.data });
        default:
            return state;
    }
};


const initialState = {
    tag: ''
};

export default AppTagDataReducer;
