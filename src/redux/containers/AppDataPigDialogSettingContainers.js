import {connect} from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import AppTagDataAction from '../actions/AppTagAction.js';
import AppRegionDataAction from '../actions/AppRegionAction.js';
import AppSelectPeriodDataAction from '../actions/AppSelectPeriodAction.js';
import AppDataPigDialogSettingWrapper from '../../app/data/AppDataPigDialogSetting.js';
import ArrayData0Action from '../actions/ArrayData0Action.js';
import ArrayData1Action from '../actions/ArrayData1Action.js';

const mapStateToProps = state => {
    var obj0 = [];
    var obj1 = [];
    var i=0,j=0,len=0;
    for (i=0,len=state.ArrayData0Reducer.length;i<len;i++) {
         obj0.push(state.ArrayData0Reducer[i]);
    }
    for (j=0,len=state.ArrayData1Reducer.length;j<len;j++) {
         obj1.push(state.ArrayData1Reducer[j]);
    }
    return {
        xaxis: obj0,
        yaxis: obj1,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        region: state.AppRegionDataReducer.region,
        tag:  state.AppTagDataReducer.tag,
        select_period: state.AppSelectPeriodDataReducer.select_period
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
        selectPeriodDataCreate: (select_period) => {
            dispatch(AppSelectPeriodDataAction(select_period));
        },
        arrayXDataCreate: (xaxis) => {
            dispatch(ArrayData0Action(xaxis));
        },
        arrayYDataCreate: (yaxis) => {
            dispatch(ArrayData1Action(yaxis));
        }
    };
};

const AppDataPigDialogSettingContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppDataPigDialogSettingWrapper);

export default AppDataPigDialogSettingContainers;

