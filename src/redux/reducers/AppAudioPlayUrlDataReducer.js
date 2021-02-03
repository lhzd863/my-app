import APP_AUDIO_PLAY_URL_TYPE from '../types/AppAudioPlayUrlType.js';

const AppAudioPlayUrlDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_URL_TYPE:
            return Object.assign({}, state, { audio_play_url: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_url: ''
};

export default AppAudioPlayUrlDataReducer;
