import APP_AUDIO_PLAY_AMOUNT_TYPE from '../types/AppAudioPlayAmountType.js';

const AppAudioPlayAmountDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_AMOUNT_TYPE:
            return Object.assign({}, state, { audio_play_amount: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_amount: ''
};

export default AppAudioPlayAmountDataReducer;
