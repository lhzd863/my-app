import APP_SELECT_PERIOD_TYPE from '../types/AppSelectPeriodType.js';

const AppSelectPeriodDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_SELECT_PERIOD_TYPE:
            return Object.assign({}, state, { select_period: action.data });
        default:
            return state;
    }
};


const initialState = {
    select_period: ''
};

export default AppSelectPeriodDataReducer;
