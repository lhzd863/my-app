import VIDEO_OP_TYPE from "../types/VideoOpType.js";

const VideoOpAction = (video_op)=> {
   return {
      type: VIDEO_OP_TYPE,
      data: video_op
   };
};

export default VideoOpAction;


