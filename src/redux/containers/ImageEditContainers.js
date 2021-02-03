import { connect } from 'react-redux';
import ImageFileNameAction from '../actions/ImageFileNameAction.js';
import ImageOpAction from '../actions/ImageOpAction.js';
import ImageUrlAction from '../actions/ImageUrlAction.js';
import ImageBackgroundAction from '../actions/ImageBackgroundAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import ImageEditWrapper from '../../app/image/ImageEdit.js';

const mapStateToProps = state => {
    return {
          image_file_name: state.ImageFileNameReducer.image_file_name,
	  image_op: state.ImageOpReducer.image_op,
          image_url: state.ImageUrlReducer.image_url,
          image_background: state.ImageBackgroundReducer.image_background,
          display_console: state.DisplayConsoleDataReducer.display_console
    };
};

const mapDispatchToProps = dispatch => {
    return {
        imageFileNameCreate: (image_file_name) => {
            dispatch(ImageFileNameAction(image_file_name));
        },
	    imageOpCreate: (image_op) => {
            dispatch(ImageOpAction(image_op));
        },
        displayConsoleCreate: (display_console) => {
            dispatch(DisplayConsoleDataAction(display_console));
        },
        imageUrlCreate: (image_url) => {
            dispatch(ImageUrlAction(image_url));
        },
        imageBackgroundCreate: (image_background) => {
            dispatch(ImageBackgroundAction(image_background));
        }
    };
};

const ImageEditContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(ImageEditWrapper);

export default ImageEditContainers;

