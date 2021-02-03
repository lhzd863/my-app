import {connect} from 'react-redux';
import AppDataPigHisWrapper from '../../app/data/AppDataPigHis.js';
import AppTagDataAction from '../actions/AppTagAction.js';
import AppRegionDataAction from '../actions/AppRegionAction.js';
import AppSelectPeriodDataAction from '../actions/AppSelectPeriodAction.js';
import AppSelectIndexDataAction from '../actions/AppSelectIndexAction.js';
import ArrayData0Action from '../actions/ArrayData0Action.js';
import ArrayData1Action from '../actions/ArrayData1Action.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';

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
        region: state.AppRegionDataReducer.region,
        tag:  state.AppTagDataReducer.tag,
        select_period: state.AppSelectPeriodDataReducer.select_period,
        select_index: state.AppSelectIndexDataReducer.select_index,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible
    };
};

const mapDispatchToProps = dispatch => {
    return {
        regionDataCreate: (region) => {
            dispatch(AppRegionDataAction(region));
        },
        tagDataCreate: (tag) => {
            dispatch(AppTagDataAction(tag));
        },
        selectPeriodDataCreate: (select_period) => {
            dispatch(AppSelectPeriodDataAction(select_period));
        },
        selectIndexDataCreate: (select_index) => {
            dispatch(AppSelectIndexDataAction(select_index));
        },
        arrayXDataCreate: (xaxis) => {
            dispatch(ArrayData0Action(xaxis));
        },
        arrayYDataCreate: (yaxis) => {
            dispatch(ArrayData1Action(yaxis));
        },
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        }
    };
};

const AppDataPigContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppDataPigHisWrapper);

export default AppDataPigContainers;

