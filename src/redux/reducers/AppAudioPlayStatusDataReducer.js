import APP_AUDIO_PLAY_STATUS_TYPE from '../types/AppAudioPlayStatusType.js';

const AppAudioPlayStatusDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_STATUS_TYPE:
            return Object.assign({}, state, { audio_play_status: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_status: ''
};

export default AppAudioPlayStatusDataReducer;
