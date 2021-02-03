import APP_AUDIO_PLAY_DATA_TYPE from '../types/AppAudioPlayDataType.js';

const AppAudioPlayDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_DATA_TYPE:
            return Object.assign({}, state, { audio_play: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play: ''
};

export default AppAudioPlayDataReducer;
