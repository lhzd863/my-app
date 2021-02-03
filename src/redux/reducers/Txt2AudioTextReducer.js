import TXT2AUDIO_TEXT_TYPE from '../types/Txt2AudioTextType.js';

const Txt2AudioTextReducer= (state = initialState,action)=>{
    switch(action.type){
        case TXT2AUDIO_TEXT_TYPE:
            return Object.assign({}, state, { txt2audio_text: action.data });
        default:
            return state;
    }
};


const initialState = {
    txt2audio_text: ''
};

export default Txt2AudioTextReducer;
