import APP_AUDIO_PLAY_IMG_TYPE from '../types/AppAudioPlayImgType.js';

const AppAudioPlayImgDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_IMG_TYPE:
            return Object.assign({}, state, { audio_play_img: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_img: ''
};

export default AppAudioPlayImgDataReducer;
