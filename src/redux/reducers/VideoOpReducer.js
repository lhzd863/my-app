import VIDEO_OP_TYPE from '../types/VideoOpType.js';

const VideoOpReducer= (state = initialState,action)=>{
    switch(action.type){
        case VIDEO_OP_TYPE:
            return Object.assign({}, state, { video_op: action.data });
        default:
            return state;
    }
};


const initialState = {
    video_op: ''
};

export default VideoOpReducer;
