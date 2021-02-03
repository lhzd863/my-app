import { connect } from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import Txt2AudioRateAction from '../actions/Txt2AudioRateAction.js';
import Txt2AudioVoiceAction from '../actions/Txt2AudioVoiceAction.js';
import Txt2AudioVoicesAction from '../actions/Txt2AudioVoicesAction.js';
import Txt2AudioVolumeAction from '../actions/Txt2AudioVolumeAction.js';
import Txt2AudioDialogSettingWrapper from '../../app/txt2audio/Txt2AudioDialogSetting.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        txt2audio_rate: state.Txt2AudioRateReducer.txt2audio_rate,
        txt2audio_volume: state.Txt2AudioVolumeReducer.txt2audio_volume,
        txt2audio_voice: state.Txt2AudioVoiceReducer.txt2audio_voice,
        txt2audio_voices: state.Txt2AudioVoicesReducer.txt2audio_voices
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible) => {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        txt2audioRateCreate: (txt2audio_rate) => {
            dispatch(Txt2AudioRateAction(txt2audio_rate));
        },
        txt2audioVoiceCreate: (txt2audio_voice) => {
            dispatch(Txt2AudioVoiceAction(txt2audio_voice));
        },
        txt2audioVolumeCreate: (txt2audio_volume) => {
            dispatch(Txt2AudioVolumeAction(txt2audio_volume));
        },
        txt2audioVoicesCreate: (txt2audio_voices) => {
            dispatch(Txt2AudioVoicesAction(txt2audio_voices));
        }
    };
};

const Txt2AudioDialogSettingContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(Txt2AudioDialogSettingWrapper);

export default Txt2AudioDialogSettingContainers;

