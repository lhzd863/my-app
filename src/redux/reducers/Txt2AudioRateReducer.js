import TXT2AUDIO_RATE_TYPE from '../types/Txt2AudioRateType.js';

const Txt2AudioRateReducer= (state = initialState,action)=>{
    switch(action.type){
        case TXT2AUDIO_RATE_TYPE:
            return Object.assign({}, state, { txt2audio_rate: action.data });
        default:
            return state;
    }
};


const initialState = {
    txt2audio_rate: 100 
};

export default Txt2AudioRateReducer;
