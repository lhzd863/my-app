import APP_AUDIO_PLAY_NAME_TYPE from '../types/AppAudioPlayNameType.js';

const AppAudioPlayNameDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_NAME_TYPE:
            return Object.assign({}, state, { audio_play_name: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_name: ''
};

export default AppAudioPlayNameDataReducer;
