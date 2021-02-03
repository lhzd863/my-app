import { connect } from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import FaceEyeAction from '../actions/FaceEyeAction.js';
import FaceLipAction from '../actions/FaceLipAction.js';
import FaceEyeBrowAction from '../actions/FaceEyeBrowAction.js';
import FaceDrawDialogSettingWrapper from '../../app/face/FaceDrawDialogSetting.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
	face_eye: state.FaceEyeReducer.face_eye,
	face_lip: state.FaceLipReducer.face_lip,
        face_eyebrow: state.FaceEyeBrowReducer.face_eyebrow
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible) => {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
	faceEyeCreate: (face_eye) => {
            dispatch(FaceEyeAction(face_eye));
        },
	faceLipCreate: (face_lip) => {
            dispatch(FaceLipAction(face_lip));
	},
	faceEyeBrowCreate: (face_eyebrow) => {
            dispatch(FaceEyeBrowAction(face_eyebrow));
        }
    };
};

const FaceDrawDialogSettingContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(FaceDrawDialogSettingWrapper);

export default FaceDrawDialogSettingContainers;

