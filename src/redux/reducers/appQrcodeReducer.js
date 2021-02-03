import APP_QRCODE_OUTPUT_CONTEXT from '../types/AppQrcodeType.js';

const appQrcodeReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_QRCODE_OUTPUT_CONTEXT:
            return Object.assign({}, state, { qrcode_context: action.data });
        default:
            return state;
    }
};


const initialState = {
    qrcode_context: ''
};

export default appQrcodeReducer;
