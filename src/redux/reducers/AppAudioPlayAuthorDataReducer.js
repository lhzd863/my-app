import APP_AUDIO_PLAY_AUTHOR_TYPE from '../types/AppAudioPlayAuthorType.js';

const AppAudioPlayAuthorDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_AUTHOR_TYPE:
            return Object.assign({}, state, { audio_play_author: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_authro: ''
};

export default AppAudioPlayAuthorDataReducer;
