import {connect} from 'react-redux';
import AppAudioListWrapper from '../../app/audio/AppAudioList.js';
import AppAudioPlayCatalogDataAction from '../actions/AppAudioPlayCatalogDataAction.js';
import AppAudioPlayContextDataAction from '../actions/AppAudioPlayContextDataAction.js';
import AppAudioPlayNameDataAction from '../actions/AppAudioPlayNameDataAction.js';
import AppAudioPlayInfoDataAction from '../actions/AppAudioPlayInfoDataAction.js';
import AppAudioPlayUrlDataAction from '../actions/AppAudioPlayUrlDataAction.js';
import AppAudioPlayAmountDataAction from '../actions/AppAudioPlayAmountDataAction.js';
import AppAudioPlayImgDataAction from '../actions/AppAudioPlayImgDataAction.js';
import AppAudioPlayStatusDataAction from '../actions/AppAudioPlayStatusDataAction.js';
import AppAudioPlayAnnouncerDataAction from '../actions/AppAudioPlayAnnouncerDataAction.js';
import AppAudioPlayAuthorDataAction from '../actions/AppAudioPlayAuthorDataAction.js';
import AppAudioPlaySequenceDataAction from '../actions/AppAudioPlaySequenceDataAction.js';
import AppAudioPlayUdtDataAction from '../actions/AppAudioPlayUdtDataAction.js';
import AppAudioPlayFormatDataAction from '../actions/AppAudioPlayFormatDataAction.js';

const mapStateToProps = state => {
    return {
        audio_play_catalog: state.AppAudioPlayCatalogDataReducer.audio_play_catalog
    };
};

const mapDispatchToProps = dispatch => {
    return {
        audioPlayCatalogCreate: (audio_play_catalog) => {
            dispatch(AppAudioPlayCatalogDataAction(audio_play_catalog));
        },
        audioPlayContextCreate: (audio_play_context) => {
            dispatch(AppAudioPlayContextDataAction(audio_play_context));
        },
        audioPlayNameCreate: (audio_play_name) => {
            dispatch(AppAudioPlayNameDataAction(audio_play_name));
        },
        audioPlayInfoCreate: (audio_play_info) => {
            dispatch(AppAudioPlayInfoDataAction(audio_play_info));
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
        audioPlayAnnouncerCreate: (audio_play_announcer) => {
            dispatch(AppAudioPlayAnnouncerDataAction(audio_play_announcer));
        },
        audioPlayAuthorCreate: (audio_play_author) => {
            dispatch(AppAudioPlayAuthorDataAction(audio_play_author));
        },
        audioPlaySequenceCreate: (audio_play_sequence) => {
            dispatch(AppAudioPlaySequenceDataAction(audio_play_sequence));
        },
        audioPlayUdtCreate: (audio_play_udt) => {
            dispatch(AppAudioPlayUdtDataAction(audio_play_udt));
        },
        audioPlayFormatCreate: (audio_play_format) => {
            dispatch(AppAudioPlayFormatDataAction(audio_play_format));
        }
    };
};

const AppAudioListDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioListWrapper);

export default AppAudioListDataContainers;

