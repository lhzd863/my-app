import { connect } from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import Txt2AudioWrapper from '../../app/txt2audio/Txt2Audio.js';
import Txt2AudioTextAction from '../actions/Txt2AudioTextAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        txt2audio_rate: state.Txt2AudioRateReducer.txt2audio_rate,
        txt2audio_volume: state.Txt2AudioVolumeReducer.txt2audio_volume,
        txt2audio_voice: state.Txt2AudioVoiceReducer.txt2audio_voice,
        txt2audio_text: state.Txt2AudioTextReducer.txt2audio_text,
        txt2audio_voices: state.Txt2AudioVoicesReducer.txt2audio_voices,
        display_console: state.DisplayConsoleDataReducer.display_console
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible) => {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        txt2audioTextCreate: (txt2audio_text) => {
            dispatch(Txt2AudioTextAction(txt2audio_text));
        },
        displayConsoleCreate: (txt2audio_text) => {
            dispatch(DisplayConsoleDataAction(txt2audio_text));
        }
    };
};

const Txt2AudioContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Txt2AudioWrapper);

export default Txt2AudioContainers;

