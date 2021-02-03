import VIDEO_FILE_NAME_TYPE from '../types/VideoFileNameType.js';

const VideoFileNameReducer= (state = initialState,action)=>{
    switch(action.type){
        case VIDEO_FILE_NAME_TYPE:
            return Object.assign({}, state, { video_file_name: action.data });
        default:
            return state;
    }
};


const initialState = {
    video_file_name: ''
};

export default VideoFileNameReducer;
