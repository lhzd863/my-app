import {connect} from 'react-redux';
import AppPricePigHisWrapper from '../../app/price/AppPricePig.js';
import AppTagDataAction from '../actions/AppTagAction.js';
import AppRegionDataAction from '../actions/AppRegionAction.js';
import AppSelectPeriodDataAction from '../actions/AppSelectPeriodAction.js';
import AppSelectIndexDataAction from '../actions/AppSelectIndexAction.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import Xaxis0DataAction from '../actions/Xaxis0DataAction.js';
import Xaxis1DataAction from '../actions/Xaxis1DataAction.js';
import Xaxis2DataAction from '../actions/Xaxis2DataAction.js';
import Yaxis0DataAction from '../actions/Yaxis0DataAction.js';
import Yaxis1DataAction from '../actions/Yaxis1DataAction.js';
import Yaxis2DataAction from '../actions/Yaxis2DataAction.js';
import Yaxis3DataAction from '../actions/Yaxis3DataAction.js';

const mapStateToProps = state => {
    var objx0 = [];
    var objx1 = [];
    var objx2 = [];
    var objy0 = [];
    var objy1 = [];
    var objy2 = [];
    var objy3 = [];
    var x0=0,x1=0,x2,y0=0,y1=0,y2=0,y3=0,len=0;
    for (x0=0,len=state.Xaxis0DataReducer.length;x0<len;x0++) {
         objx0.push(state.Xaxis0DataReducer[x0]);
    }
    for (x1=0,len=state.Xaxis1DataReducer.length;x1<len;x1++) {
         objx1.push(state.Xaxis1DataReducer[x1]);
    }
    for (x2=0,len=state.Xaxis2DataReducer.length;x2<len;x2++) {
         objx2.push(state.Xaxis2DataReducer[x2]);
    }
    for (y0=0,len=state.Yaxis0DataReducer.length;y0<len;y0++) {
         objy0.push(state.Yaxis0DataReducer[y0]);
    }
    for (y1=0,len=state.Yaxis1DataReducer.length;y1<len;y1++) {
         objy1.push(state.Yaxis1DataReducer[y1]);
    }
    for (y2=0,len=state.Yaxis2DataReducer.length;y2<len;y2++) {
         objy2.push(state.Yaxis2DataReducer[y2]);
    }
    for (y3=0,len=state.Yaxis3DataReducer.length;y3<len;y3++) {
        objy3.push(state.Yaxis3DataReducer[y3]);
    }
    return {
        xaxis0: objx0,
        xaxis1: objx1,
        xaxis2: objx2,
        yaxis0: objy0,
        yaxis1: objy1,
        yaxis2: objy2,
        yaxis3: objy3,
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
        Xaxis0Create: (xaxis0) => {
            dispatch(Xaxis0DataAction(xaxis0));
        },
        Xaxis1Create: (xaxis1) => {
            dispatch(Xaxis1DataAction(xaxis1));
        },
        Xaxis2Create: (xaxis2) => {
            dispatch(Xaxis2DataAction(xaxis2));
        },
        Yaxis0Create: (yaxis0) => {
            dispatch(Yaxis0DataAction(yaxis0));
        },
        Yaxis1Create: (yaxis1) => {
            dispatch(Yaxis1DataAction(yaxis1));
        },
        Yaxis2Create: (yaxis2) => {
            dispatch(Yaxis2DataAction(yaxis2));
        },
        Yaxis3Create: (yaxis3) => {
            dispatch(Yaxis3DataAction(yaxis3));
        },
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        }
    };
};

const AppPricePigContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppPricePigHisWrapper);

export default AppPricePigContainers;

