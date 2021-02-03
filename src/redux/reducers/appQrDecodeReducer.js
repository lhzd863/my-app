import  APP_QRDECODE_OUTPUT_CONTEXT  from '../types/AppQrDecodeType.js';

const appQrDecodeReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_QRDECODE_OUTPUT_CONTEXT:
            return Object.assign({}, state, { output_context: action.data });
        default:
            return state;
    }
};


const initialState = {
    output_context: ''
};

export default appQrDecodeReducer;
