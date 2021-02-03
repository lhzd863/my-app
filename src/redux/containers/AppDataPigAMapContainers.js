import {connect} from 'react-redux';
import AppDataPigAMapWrapper from '../../app/data/AppDataPigAMap.js';
import Xaxis0DataAction from '../actions/Xaxis0DataAction.js';
import Yaxis0DataAction from '../actions/Yaxis0DataAction.js';
import LbsLongitudeAction from '../actions/LbsLongitudeAction.js';
import LbsLatitudeAction from '../actions/LbsLatitudeAction.js';

const mapStateToProps = state => {
    var obj0 = [];
    var obj1 = [];
    var i=0,j=0,len=0;
    for (i=0,len=state.Xaxis0DataReducer.length;i<len;i++) {
         obj0.push(state.Xaxis0DataReducer[i]);
    }
    for (j=0,len=state.Yaxis0DataReducer.length;j<len;j++) {
         obj1.push(state.Yaxis0DataReducer[j]);
    }
    return {
        xaxis0: obj0,
        yaxis0: obj1,
        region: state.AppRegionDataReducer.region,
        tag:  state.AppTagDataReducer.tag,
        select_period: state.AppSelectPeriodDataReducer.select_period,
        lbs_longitude: state.LbsLongitudeReducer.lbs_longitude,
        lbs_latitude: state.LbsLatitudeReducer.lbs_latitude
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Xaxis0DataCreate: (xaxis0) => {
            dispatch(Xaxis0DataAction(xaxis0));
        },
        Yaxis0DataCreate: (yaxis0) => {
            dispatch(Yaxis0DataAction(yaxis0));
        },
        LbsLongitudeCreate: (lbs_longitude) => {
            dispatch(LbsLongitudeAction(lbs_longitude));
        },
        LbsLatitudeCreate: (lbs_latitude) => {
            dispatch(LbsLatitudeAction(lbs_latitude));
        }
    };
};

const AppDataPigAMapContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppDataPigAMapWrapper);

export default AppDataPigAMapContainers;

