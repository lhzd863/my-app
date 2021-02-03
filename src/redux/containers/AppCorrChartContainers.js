import {connect} from 'react-redux';
import AppCorrChartsWrapper from '../../app/charts/AppCorrCharts.js';
import {LeastsqAvalDataAction,LeastsqBvalDataAction,LeastsqCalvalDataAction,LeastsqUrlDataAction} from '../actions/LeastsqAction.js';
import ArrayData2Action from '../actions/ArrayData2Action.js';
import DisplayNameDataAction from '../actions/DisplayNameDataAction.js';
import DisplayConsoleDataAction from '../actions/DisplayConsoleDataAction.js';
import ArrayConsoleDataAction from '../actions/ArrayConsoleDataAction.js';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import ChartFitLineLossValueDataAction from '../actions/ChartFitLineLossValueDataAction.js';
import ChartFitLineOptimizedTimeDataAction from '../actions/ChartFitLineOptimizedTimeDataAction.js';
import LoadingEnableDataAction from '../actions/LoadingEnableDataAction.js';


const mapStateToProps = state => {
    var obj0 = [];
    var obj1 = [];
    var i=0,len=0;
    for (i=0,len=state.ArrayData2Reducer.length;i<len;i++) {
         obj0.push(state.ArrayData2Reducer[i]);
    }
    for (i=0,len=state.ArrayConsoleDataReducer.length;i<len;i++) {
         obj1.push(state.ArrayConsoleDataReducer[i]);
    }
    return {
        aval: state.LeastsqAvalReducer.aval,
        bval: state.LeastsqBvalReducer.bval,
        edata: obj0,
        cdata: obj1,
        calval: state.LeastsqCalvalReducer.calval,
        url: state.LeastsqUrlReducer.url,
        display_name: state.DisplayNameReducer.display_name,
        display_console: state.DisplayConsoleDataReducer.display_console,
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        chart_title: state.ChartTitleDataReducer.chart_title,
        chart_window_img_width: state.ChartWindowImgWidthDataReducer.chart_window_img_width,
        chart_window_img_height: state.ChartWindowImgHeightDataReducer.chart_window_img_height,
        chart_leastsq_console_express_enable: state.ChartLeastsqConsoleExpressEnableDataReducer.chart_leastsq_console_express_enable,
        chart_leastsq_real_value: state.ChartLeastsqRealValueDataReducer.chart_leastsq_real_value,
        chart_leastsq_real_value_result_enable: state.ChartLeastsqRealValueResultEnableDataReducer.chart_leastsq_real_value_result_enable,
        chart_fitline_optimized_time: state.ChartFitLineOptimizedTimeDataReducer.chart_fitline_optimized_time,
        chart_fitline_loss_value: state.ChartFitLineLossValueDataReducer.chart_fitline_loss_value,
        loading_enable: state.LoadingEnableDataReducer.loading_enable
    };
};

const mapDispatchToProps = dispatch => {
    return {
        avalDataCreate: (aval) => {
            dispatch(LeastsqAvalDataAction(aval));
        },
        bvalDataCreate: (bval) => {
            dispatch(LeastsqBvalDataAction(bval));
        },
        arrayEDataCreate: (edata) => {
            dispatch(ArrayData2Action(edata));
        },
        calvalDataCreate: (calval)=> {
            dispatch(LeastsqCalvalDataAction(calval));
        },
        urlDataCreate: (url)=> {
            dispatch(LeastsqUrlDataAction(url));
        },
        displayNameDataCreate: (display_name)=> {
            dispatch(DisplayNameDataAction(display_name));
        },
        displayConsoleDataCreate: (display_console)=> {
            dispatch(DisplayConsoleDataAction(display_console));
        },
        arrayConsoleDataCreate: (cdata)=> {
            dispatch(ArrayConsoleDataAction(cdata));
        },
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        chartFitLineOptimizedTimeCreate: (chart_fitline_optimized_time)=> {
            dispatch(ChartFitLineOptimizedTimeDataAction(chart_fitline_optimized_time));
        },
        chartFitLineLossValueCreate: (chart_fitline_loss_value)=> {
            dispatch(ChartFitLineLossValueDataAction(chart_fitline_loss_value));
        },
        loadingEnableCreate: (loading_enable)=> {
            dispatch(LoadingEnableDataAction(loading_enable));
        }
    };
};

const AppCorrChartContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(AppCorrChartsWrapper);

export default AppCorrChartContainers;

