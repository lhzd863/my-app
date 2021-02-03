import VIDEO_FILE_NAME_TYPE from "../types/VideoFileNameType.js";

const VideoFileNameAction = (video_file_name)=> {
   return {
      type: VIDEO_FILE_NAME_TYPE,
      data: video_file_name
   };
};

export default VideoFileNameAction;


