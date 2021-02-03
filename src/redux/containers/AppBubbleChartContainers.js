import {connect} from 'react-redux';
import AppBubbleChartsWrapper from '../../app/charts/AppBubbleCharts.js';
import ArrayData0Action from '../actions/ArrayData0Action.js';
import ArrayData1Action from '../actions/ArrayData1Action.js';
import ArrayData2Action from '../actions/ArrayData2Action.js';
import DisplayNameDataAction from '../actions/DisplayNameDataAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';

const mapStateToProps = state => {
    var obj0 = [];
    var obj1 = [];
    var obj2 = [];
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
    console.log(state);
    return {
        xaxis: obj0,
        yaxis: obj1,
        edata: obj2,
        display_name: state.DisplayNameReducer.display_name,
        display_console: state.DisplayConsoleDataReducer.display_console,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        chart_label: state.ChartLabelDataReducer.chart_label,
        chart_label_position: state.ChartLabelPositionDataReducer.chart_label_position,
        chart_label_enable: state.ChartLabelEnableDataReducer.chart_label_enable,
        chart_title: state.ChartTitleDataReducer.chart_title,
        chart_title_position: state.ChartTitlePositionDataReducer.chart_title_position,
        chart_title_enable: state.ChartTitleEnableDataReducer.chart_title_enable,
        chart_xaxis: state.ChartXaxisDataReducer.chart_xaxis,
        chart_xaxis_enable: state.ChartXaxisEnableDataReducer.chart_xaxis_enable,
        chart_yaxis: state.ChartYaxisDataReducer.chart_yaxis,
        chart_yaxis_enable: state.ChartYaxisEnableDataReducer.chart_yaxis_enable,
        chart_window_width: state.ChartWindowWidthDataReducer.chart_window_width,
        chart_window_height: state.ChartWindowHeightDataReducer.chart_window_height
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
        },
        displayNameDataCreate: (display_name)=> {
            dispatch(DisplayNameDataAction(display_name));
        },
        displayConsoleDataCreate: (display_console)=> {
            dispatch(DisplayConsoleDataAction(display_console));
        },
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        }
    };
};

const AppBubbleChartContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppBubbleChartsWrapper);

export default AppBubbleChartContainers;

