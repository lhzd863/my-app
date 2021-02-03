import { connect } from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import FaceDrawWrapper from '../../app/face/FaceDraw.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        display_console: state.DisplayConsoleDataReducer.display_console
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible) => {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        displayConsoleCreate: (txt2audio_text) => {
            dispatch(DisplayConsoleDataAction(txt2audio_text));
        }
    };
};

const FaceDrawContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(FaceDrawWrapper);

export default FaceDrawContainers;

