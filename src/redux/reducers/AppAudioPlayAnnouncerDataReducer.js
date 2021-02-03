import APP_AUDIO_PLAY_ANNOUNCER_TYPE from '../types/AppAudioPlayAnnouncerType.js';

const AppAudioPlayAnnouncerDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_ANNOUNCER_TYPE:
            return Object.assign({}, state, { audio_play_announcer: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_announcer: ''
};

export default AppAudioPlayAnnouncerDataReducer;
