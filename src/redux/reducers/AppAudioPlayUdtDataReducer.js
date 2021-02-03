import APP_AUDIO_PLAY_UDT_TYPE from '../types/AppAudioPlayUdtType.js';

const AppAudioPlayUdtDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_UDT_TYPE:
            return Object.assign({}, state, { audio_play_udt: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_udt: ''
};

export default AppAudioPlayUdtDataReducer;
