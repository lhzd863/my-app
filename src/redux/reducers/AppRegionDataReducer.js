import APP_REGION_TYPE from '../types/AppRegionType.js';

const AppRegionDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_REGION_TYPE:
            return Object.assign({}, state, { region: action.data });
        default:
            return state;
    }
};


const initialState = {
    region: ''
};

export default AppRegionDataReducer;
