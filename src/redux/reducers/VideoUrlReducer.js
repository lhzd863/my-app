import VIDEO_URL_TYPE from '../types/VideoUrlType.js';

const VideoUrlReducer= (state = initialState,action)=>{
    switch(action.type){
        case VIDEO_URL_TYPE:
            return Object.assign({}, state, { video_url: action.data });
        default:
            return state;
    }
};


const initialState = {
    video_url: ''
};

export default VideoUrlReducer;
