import {connect} from 'react-redux';
import FiledCn2EnDialogWrapper from '../../admin/FieldCn2EnDialog.js';
import {FieldCnNameDataAction,FieldEnNameDataAction,FieldTypeDataAction,FieldTagDataAction} from '../actions/FieldAction.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';

const mapStateToProps = state => {
    return {
        field_cnname: state.FieldCnNameDataReducer.field_cnname,
        field_enname: state.FieldEnNameDataReducer.field_enname,
        field_type: state.FieldTypeDataReducer.field_type,
        field_tag: state.FieldTagDataReducer.field_tag,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        fieldCnNameDataCreate: (field_cnname) => {
            dispatch(FieldCnNameDataAction(field_cnname));
        },
        fieldEnNameDataCreate: (field_enname) => {
            dispatch(FieldEnNameDataAction(field_enname));
        },
        fieldTypeDataCreate: (field_type) => {
            dispatch(FieldTypeDataAction(field_type));
        },
        fieldTagDataCreate: (field_tag) => {
            dispatch(FieldTagDataAction(field_tag));
        }
    };
};

const FieldCn2EnDialogContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(FiledCn2EnDialogWrapper);

export default FieldCn2EnDialogContainers;

