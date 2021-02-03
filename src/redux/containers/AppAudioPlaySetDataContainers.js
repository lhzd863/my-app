import {connect} from 'react-redux';
import AppAudioPlaySetWrapper from '../../app/audio/AppAudioPlaySet.js';
import AppAudioPlayCatalogDataAction from '../actions/AppAudioPlayCatalogDataAction.js';
import AppAudioPlayNameDataAction from '../actions/AppAudioPlayNameDataAction.js';
import AppAudioPlayUrlDataAction from '../actions/AppAudioPlayUrlDataAction.js';
import AppAudioPlayAmountDataAction from '../actions/AppAudioPlayAmountDataAction.js';
import AppAudioPlayImgDataAction from '../actions/AppAudioPlayImgDataAction.js';
import AppAudioPlayStatusDataAction from '../actions/AppAudioPlayStatusDataAction.js';
import AppAudioPlayContextDataAction from '../actions/AppAudioPlayContextDataAction.js';
import AppAudioPlayAuthorDataAction from '../actions/AppAudioPlayAuthorDataAction.js';
import AppAudioPlayAnnouncerDataAction from '../actions/AppAudioPlayAnnouncerDataAction.js';
import AppAudioPlaySequenceDataAction from '../actions/AppAudioPlaySequenceDataAction.js';

const mapStateToProps = state => {
    return {
        audio_play_catalog: state.AppAudioPlayCatalogDataReducer.audio_play_catalog,
        audio_play_context: state.AppAudioPlayContextDataReducer.audio_play_context,
        audio_play_name: state.AppAudioPlayNameDataReducer.audio_play_name,
        audio_play_url: state.AppAudioPlayUrlDataReducer.audio_play_url,
        audio_play_amount: state.AppAudioPlayAmountDataReducer.audio_play_amount,
        audio_play_img: state.AppAudioPlayImgDataReducer.audio_play_img,
        audio_play_status: state.AppAudioPlayStatusDataReducer.audio_play_status,
        audio_play_author: state.AppAudioPlayAuthorDataReducer.audio_play_author,
        audio_play_announcer: state.AppAudioPlayAnnouncerDataReducer.audio_play_announcer,
        audio_play_sequence: state.AppAudioPlaySequenceDataReducer.audio_play_sequence,
        audio_play_udt: state.AppAudioPlayUdtDataReducer.audio_play_udt,
        audio_play_format: state.AppAudioPlayFormatDataReducer.audio_play_format
    };
};

const mapDispatchToProps = dispatch => {
    return {
        audioPlayCatalogCreate: (audio_play_catalog) => {
            dispatch(AppAudioPlayCatalogDataAction(audio_play_catalog));
        },
        audioPlayNameCreate: (audio_play_name) => {
            dispatch(AppAudioPlayNameDataAction(audio_play_name));
        },
        audioPlayUrlCreate: (audio_play_url) => {
            dispatch(AppAudioPlayUrlDataAction(audio_play_url));
        },
        audioPlayAmountCreate: (audio_play_amount) => {
            dispatch(AppAudioPlayAmountDataAction(audio_play_amount));
        },
        audioPlayImgCreate: (audio_play_img) => {
            dispatch(AppAudioPlayImgDataAction(audio_play_img));
        },
        audioPlayStatusCreate: (audio_play_status) => {
            dispatch(AppAudioPlayStatusDataAction(audio_play_status));
        },
        audioPlayContextCreate: (audio_play_context) => {
            dispatch(AppAudioPlayContextDataAction(audio_play_context));
        },
        audioPlayAuthorCreate: (audio_play_author) => {
            dispatch(AppAudioPlayAuthorDataAction(audio_play_author));
        },
        audioPlayAnnouncerCreate: (audio_play_announcer) => {
            dispatch(AppAudioPlayAnnouncerDataAction(audio_play_announcer));
        },
        audioPlaySequenceCreate: (audio_play_sequence) => {
            dispatch(AppAudioPlaySequenceDataAction(audio_play_sequence));
        }
    };
};

const AppAudioPlaySetDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioPlaySetWrapper);

export default AppAudioPlaySetDataContainers;

