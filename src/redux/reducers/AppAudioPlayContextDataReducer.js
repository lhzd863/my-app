import APP_AUDIO_PLAY_CONTEXT_TYPE from '../types/AppAudioPlayContextType.js';

const AppAudioPlayContextDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_CONTEXT_TYPE:
            return Object.assign({}, state, { audio_play_context: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_context: ''
};

export default AppAudioPlayContextDataReducer;
