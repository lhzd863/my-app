import VIDEO_URL_TYPE from "../types/VideoUrlType.js";

const VideoUrlAction = (video_url)=> {
   return {
      type: VIDEO_URL_TYPE,
      data: video_url
   };
};

export default VideoUrlAction;


