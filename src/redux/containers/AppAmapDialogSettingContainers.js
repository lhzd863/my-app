import {connect} from 'react-redux';
import AppAmapDialogSettingWrapper from '../../app/map/AppAmapDialogSetting.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import AppTagDataAction from '../actions/AppTagAction.js';
import AppRegionDataAction from '../actions/AppRegionAction.js';
import IconUrlAction from '../actions/IconUrlAction.js';
import LbsLongitudeAction from '../actions/LbsLongitudeAction.js';
import LbsLatitudeAction from '../actions/LbsLatitudeAction.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        region: state.AppRegionDataReducer.region,
        tag:  state.AppTagDataReducer.tag,
        icon_url: state.IconUrlReducer.icon_url,
        lbs_longitude: state.LbsLongitudeReducer.lbs_longitude,
        lbs_latitude: state.LbsLatitudeReducer.lbs_latitude
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        regionDataCreate: (region) => {
            dispatch(AppRegionDataAction(region));
        },
        tagDataCreate: (tag) => {
            dispatch(AppTagDataAction(tag));
        },
        IconUrlCreate: (icon_url) => {
            dispatch(IconUrlAction(icon_url));
        },
        LbsLongitudeCreate: (lbs_longitude) => {
            dispatch(LbsLongitudeAction(lbs_longitude));
        },
        LbsLatitudeCreate: (lbs_latitude) => {
            dispatch(LbsLatitudeAction(lbs_latitude));
        }
    };
};

const AppAmapDialogSettingContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppAmapDialogSettingWrapper);

export default AppAmapDialogSettingContainers;

