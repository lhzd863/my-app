import TXT2AUDIO_VOICE_TYPE from '../types/Txt2AudioVoiceType.js';

const Txt2AudioVoiceReducer= (state = initialState,action)=>{
    switch(action.type){
        case TXT2AUDIO_VOICE_TYPE:
            return Object.assign({}, state, { txt2audio_voice: action.data });
        default:
            return state;
    }
};


const initialState = {
    txt2audio_voice: ''
};

export default Txt2AudioVoiceReducer;
