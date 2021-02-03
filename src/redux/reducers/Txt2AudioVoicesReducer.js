import TXT2AUDIO_VOICES_TYPE from '../types/Txt2AudioVoicesType.js';

const Txt2AudioVoicesReducer= (state = initialState,action)=>{
    switch(action.type){
        case TXT2AUDIO_VOICES_TYPE:
            return Object.assign({}, state, { txt2audio_voices: action.data });
        default:
            return state;
    }
};


const initialState = {
    txt2audio_voices: '' 
};

export default Txt2AudioVoicesReducer;
