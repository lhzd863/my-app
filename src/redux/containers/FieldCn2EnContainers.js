import {connect} from 'react-redux';
import FiledCn2EnWrapper from '../../admin/FieldCn2En.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import {FieldCnNameDataAction,FieldEnNameDataAction,FieldTypeDataAction,FieldTagDataAction} from '../actions/FieldAction.js';

const mapStateToProps = state => {
    console.log(state);
    return {
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

const FieldCn2EnContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(FiledCn2EnWrapper);

export default FieldCn2EnContainers;

