import {connect} from 'react-redux';
import AppDataPigBarWrapper from '../../app/data/AppDataPigBar.js';
import Xaxis0DataAction from '../actions/Xaxis0DataAction.js';
import Yaxis0DataAction from '../actions/Yaxis0DataAction.js';

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
        select_period: state.AppSelectPeriodDataReducer.select_period
    };
};

const mapDispatchToProps = dispatch => {
    return {
        Xaxis0DataCreate: (xaxis0) => {
            dispatch(Xaxis0DataAction(xaxis0));
        },
        Yaxis0DataCreate: (yaxis0) => {
            dispatch(Yaxis0DataAction(yaxis0));
        }
    };
};

const AppDataPigBarContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppDataPigBarWrapper);

export default AppDataPigBarContainers;

