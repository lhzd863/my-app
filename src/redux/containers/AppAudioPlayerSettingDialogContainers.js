import {connect} from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import AppAudioPlayerSettingDialogWrapper from '../../app/audio/AppAudioPlayerSettingDialog.js';
import AppAudioPlayBackRateDataAction from '../actions/AppAudioPlayBackRateDataAction.js';


const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        audio_play_back_rate: state.AppAudioPlayBackRateDataReducer.audio_play_back_rate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        audioPlayBackRateCreate: (audio_play_back_rate) => {
            dispatch(AppAudioPlayBackRateDataAction(audio_play_back_rate));
        }
    };
};

const ChartDialogLeastsqSettingContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioPlayerSettingDialogWrapper);

export default ChartDialogLeastsqSettingContainers;

