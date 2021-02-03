import {connect} from 'react-redux';
import AppAudioPlayWrapper from '../../app/audio/AppAudioPlay.js';
import AppAudioPlaySequenceDataAction from '../actions/AppAudioPlaySequenceDataAction.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';

const mapStateToProps = state => {
    return {
        audio_play_sequence: state.AppAudioPlaySequenceDataReducer.audio_play_sequence,
        audio_play_name: state.AppAudioPlayNameDataReducer.audio_play_name,
        audio_play_catalog: state.AppAudioPlayCatalogDataReducer.audio_play_catalog,
        audio_play_url: state.AppAudioPlayUrlDataReducer.audio_play_url,
        audio_play_format: state.AppAudioPlayFormatDataReducer.audio_play_format,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        audio_play_back_rate: state.AppAudioPlayBackRateDataReducer.audio_play_back_rate
    };
};

const mapDispatchToProps = dispatch => {
    return {
        audioPlaySequenceCreate: (audio_play_sequence) => {
            dispatch(AppAudioPlaySequenceDataAction(audio_play_sequence));
        },
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        }
    };
};

const AppAudioPlayDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioPlayWrapper);

export default AppAudioPlayDataContainers;

