import { connect } from 'react-redux';
import VideoFileNameAction from '../actions/VideoFileNameAction.js';
import VideoOpAction from '../actions/VideoOpAction.js';
import VideoUrlAction from '../actions/VideoUrlAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import VideoWrapper from '../../app/video/Video.js';

const mapStateToProps = state => {
    return {
          video_file_name: state.VideoFileNameReducer.video_file_name,
	  video_op: state.VideoOpReducer.video_op,
          video_url: state.VideoUrlReducer.video_url,
          display_console: state.DisplayConsoleDataReducer.display_console
    };
};

const mapDispatchToProps = dispatch => {
    return {
        videoFileNameCreate: (video_file_name) => {
            dispatch(VideoFileNameAction(video_file_name));
        },
	    videoOpCreate: (video_op) => {
            dispatch(VideoOpAction(video_op));
        },
        displayConsoleCreate: (display_console) => {
            dispatch(DisplayConsoleDataAction(display_console));
        },
        videoUrlCreate: (video_url) => {
            dispatch(VideoUrlAction(video_url));
        }
    };
};

const VideoContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(VideoWrapper);

export default VideoContainers;

