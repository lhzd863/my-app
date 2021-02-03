import {connect} from 'react-redux';
import AppQrcodeWrapper from '../../app/qrcode/AppQrcode.js';
import appQrcodeAction from '../actions/AppQrcodeAction.js';

const mapStateToProps = state => {
    return {
        qrcode_context: state.appQrcodeReducer.qrcode_context
    };
};

const mapDispatchToProps = dispatch => {
    return {
        qrcodeContextCreater: (qrcode_context) => {
            dispatch(appQrcodeAction(qrcode_context));
        }
    };
};

const AppQrcodeContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppQrcodeWrapper);

export default AppQrcodeContainers;

