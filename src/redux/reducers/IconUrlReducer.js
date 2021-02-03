import ICON_URL_TYPE from '../types/IconUrlType.js';

const IconUrlReducer= (state = initialState,action)=>{
    switch(action.type){
        case ICON_URL_TYPE:
            return Object.assign({}, state, { icon_url: action.data });
        default:
            return state;
    }
};


const initialState = {
    icon_url: ''
};

export default IconUrlReducer;
