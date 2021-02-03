import APP_AUDIO_PLAY_SEQUENCE_TYPE from '../types/AppAudioPlaySequenceType.js';

const AppAudioPlaySequenceDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_SEQUENCE_TYPE:
            return Object.assign({}, state, { audio_play_sequence: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_sequence: ''
};

export default AppAudioPlaySequenceDataReducer;
