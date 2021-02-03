import APP_AUDIO_PLAY_FORMAT_TYPE from '../types/AppAudioPlayFormatType.js';

const AppAudioPlayFormatDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_FORMAT_TYPE:
            return Object.assign({}, state, { audio_play_format: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_format: ''
};

export default AppAudioPlayFormatDataReducer;
