import LOADING_ENABLE_DATA_TYPE from '../types/LoadingEnableDataType.js';

const LoadingEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case LOADING_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { loading_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    loading_enable: false
};

export default LoadingEnableDataReducer;
