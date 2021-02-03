import APP_AUDIO_PLAY_INFO_TYPE from '../types/AppAudioPlayInfoType.js';

const AppAudioPlayInfoDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_INFO_TYPE:
            return Object.assign({}, state, { audio_play_info: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_info: ''
};

export default AppAudioPlayInfoDataReducer;
