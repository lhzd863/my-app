import CHART_LEASTSQ_CONSOLE_EXPRESS_ENABLE_DATA_TYPE from '../types/ChartLeastsqConsoleExpressEnableDataType.js';

const ChartLeastsqConsoleExpressEnableDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_LEASTSQ_CONSOLE_EXPRESS_ENABLE_DATA_TYPE:
            return Object.assign({}, state, { chart_leastsq_console_express_enable: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_leastsq_console_express_enable: true
};

export default ChartLeastsqConsoleExpressEnableDataReducer;
