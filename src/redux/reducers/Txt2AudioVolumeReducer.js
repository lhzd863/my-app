import TXT2AUDIO_VOLUME_TYPE from '../types/Txt2AudioVolumeType.js';

const Txt2AudioVolumeReducer= (state = initialState,action)=>{
    switch(action.type){
        case TXT2AUDIO_VOLUME_TYPE:
            return Object.assign({}, state, { txt2audio_volume: action.data });
        default:
            return state;
    }
};


const initialState = {
    txt2audio_volume: 1.0 
};

export default Txt2AudioVolumeReducer;
