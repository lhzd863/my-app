import {connect} from 'react-redux';
import AppQrDecode from '../../app/qrcode/AppQrDecode.js';
import appQrDecodeAction from '../actions/AppQrDecodeAction.js';

const mapStateToProps = state => {
    return {
        output_context: state.appQrDecodeReducer.output_context
    };
};

const mapDispatchToProps = dispatch => {
    return {
        appQrDecodeCreater: (output_context) => {
            dispatch(appQrDecodeAction(output_context));
        }
    };
};

const AppQrDecodeContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppQrDecode);

export default AppQrDecodeContainers;

