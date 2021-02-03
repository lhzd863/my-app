import { connect } from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import ChirstmasHatWrapper from '../../app/chirstmas/ChirstmasHat.js';

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
        displayConsoleCreate: (display_console) => {
            dispatch(DisplayConsoleDataAction(display_console));
        }
    };
};

const ChirstmasHatContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(ChirstmasHatWrapper);

export default ChirstmasHatContainers;

