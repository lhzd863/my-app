import ZDWST_STATE_VERSION_TYPE from "../types/ZdwstStateVersionType.js";

const ZdwstStateVersionReducer= (state = initialState,action)=>{
    switch(action.type){
        case ZDWST_STATE_VERSION_TYPE:
            return Object.assign({}, state, { version: action.payload });
        default:
            return state;
    }
};


const initialState = {
    version: 0.1
};

export default ZdwstStateVersionReducer;
