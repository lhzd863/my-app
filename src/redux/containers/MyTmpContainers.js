import {connect} from 'react-redux';
import AppTmpWrapper from '../../app/tmp/AppTmpWrapper.js';
import ArrayData0Action from '../actions/ArrayData0Action.js';
import ArrayData1Action from '../actions/ArrayData1Action.js';
import ArrayData2Action from '../actions/ArrayData2Action.js';

const mapStateToProps = state => {
    var obj0 = [];
    var obj1 = [];
    var obj2 = [];
    console.log(state);
    var i=0,j=0,k=0,len=0;
    for (i=0,len=state.ArrayData0Reducer.length;i<len;i++) {
         obj0.push(state.ArrayData0Reducer[i]);
    }
    for (j=0,len=state.ArrayData1Reducer.length;j<len;j++) {
         obj1.push(state.ArrayData1Reducer[j]);
    }
    for (k=0,len=state.ArrayData2Reducer.length;k<len;k++) {
         obj2.push(state.ArrayData2Reducer[k]);
    }
    console.log(obj0);
    return {
        xaxis: obj0,
        yaxis: obj1,
        edata: obj2
    };
};

const mapDispatchToProps = dispatch => {
    return {
        arrayXDataCreate: (xaxis) => {
            dispatch(ArrayData0Action(xaxis));
        },
        arrayYDataCreate: (yaxis) => {
            dispatch(ArrayData1Action(yaxis));
        },
        arrayEDataCreate: (edata) => {
            dispatch(ArrayData2Action(edata));
        }
    };
};

const MyTmpContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppTmpWrapper);

export default MyTmpContainers;

