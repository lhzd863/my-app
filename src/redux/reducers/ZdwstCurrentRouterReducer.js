import ZDWST_CURRENT_ROUTER_TYPE from "../types/ZdwstCurrentRouterType.js";

const ZdwstCurrentRouterReducer= (state = initialState,action)=>{
    switch(action.type){
        case ZDWST_CURRENT_ROUTER_TYPE:
            return Object.assign({}, state, { version: action.data });
        default:
            return state;
    }
};


const initialState = {
    zdwst_current_router: ''
};

export default ZdwstCurrentRouterReducer;
