import APP_SELECT_INDEX_TYPE from '../types/AppSelectIndexType.js';

const AppSelectIndexDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_SELECT_INDEX_TYPE:
            return Object.assign({}, state, { select_index: action.data });
        default:
            return state;
    }
};


const initialState = {
    select_index: ''
};

export default AppSelectIndexDataReducer;
