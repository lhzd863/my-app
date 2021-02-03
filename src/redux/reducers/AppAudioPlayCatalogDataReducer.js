import APP_AUDIO_PLAY_CATALOG_TYPE from '../types/AppAudioPlayCatalogType.js';

const AppAudioPlayCatalogDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_AUDIO_PLAY_CATALOG_TYPE:
            return Object.assign({}, state, { audio_play_catalog: action.data });
        default:
            return state;
    }
};


const initialState = {
    audio_play_catalog: ''
};

export default AppAudioPlayCatalogDataReducer;
