import APP_AUDIO_PLAY_BACK_RATE_TYPE from '../types/AppAudioPlayBackRateType.js';

const AppAudioPlayBackRateDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_BACK_RATE_TYPE:
            return Object.assign({}, state, { audio_play_back_rate: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_back_rate: 1
};

export default AppAudioPlayBackRateDataReducer;
