import {connect} from 'react-redux';
import AppAudioCatalogWrapper from '../../app/audio/AppAudioCatalog.js';
import AppAudioPlayCatalogDataAction from '../actions/AppAudioPlayCatalogDataAction.js';

const mapStateToProps = state => {
    return {
        audio_play_catalog: state.AppAudioPlayCatalogDataReducer.audio_play_catalog
    };
};

const mapDispatchToProps = dispatch => {
    return {
        audioPlayCatalogCreate: (audio_play_catalog) => {
            dispatch(AppAudioPlayCatalogDataAction(audio_play_catalog));
        }
    };
};

const AppAudioCatalogDataContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAudioCatalogWrapper);

export default AppAudioCatalogDataContainers;

