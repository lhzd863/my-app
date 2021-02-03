import {connect} from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import ChartTitleDataAction from '../actions/ChartTitleDataAction.js';
import ChartLeastsqConsoleExpressEnableDataAction from '../actions/ChartLeastsqConsoleExpressEnableDataAction.js';
import ChartLeastsqRealValueDataAction from '../actions/ChartLeastsqRealValueDataAction.js';
import ChartLeastsqRealValueResultEnableDataAction from '../actions/ChartLeastsqRealValueResultEnableDataAction.js';
import ChartDialogFitLineSettingWrapper from '../../components/ChartDialogFitLineSetting.js';
import ChartWindowImgWidthDataAction from '../actions/ChartWindowImgWidthDataAction.js';
import ChartWindowImgHeightDataAction from '../actions/ChartWindowImgHeightDataAction.js';
import ChartFitLineOptimizedTimeDataAction from '../actions/ChartFitLineOptimizedTimeDataAction.js';
import ChartFitLineLossValueDataAction from '../actions/ChartFitLineLossValueDataAction.js';


const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        chart_title: state.ChartTitleDataReducer.chart_title,
        chart_window_img_width: state.ChartWindowImgWidthDataReducer.chart_window_img_width,
        chart_window_img_height: state.ChartWindowImgHeightDataReducer.chart_window_img_height,
        chart_leastsq_console_express_enable: state.ChartLeastsqConsoleExpressEnableDataReducer.chart_leastsq_console_express_enable,
        chart_leastsq_real_value: state.ChartLeastsqRealValueDataReducer.chart_leastsq_real_value,
        chart_leastsq_real_value_result_enable: state.ChartLeastsqRealValueResultEnableDataReducer.chart_leastsq_real_value_result_enable,
        chart_fitline_optimized_time: state.ChartFitLineOptimizedTimeDataReducer.chart_fitline_optimized_time,
        chart_fitline_loss_value: state.ChartFitLineLossValueDataReducer.chart_fitline_loss_value
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        chartTitleDataCreate: (chart_title)=> {
            dispatch(ChartTitleDataAction(chart_title));
        },
        chartLeastsqConsoleExpressEnableDataCreate: (chart_leastsq_console_express_enable)=> {
            dispatch(ChartLeastsqConsoleExpressEnableDataAction(chart_leastsq_console_express_enable));
        },
        chartLeastsqRealValueDataCreate: (chart_leastsq_real_value)=> {
            dispatch(ChartLeastsqRealValueDataAction(chart_leastsq_real_value));
        },
        chartLeastsqRealValueResultEnableDataCreate: (chart_leastsq_real_value_result_enable)=> {
            dispatch(ChartLeastsqRealValueResultEnableDataAction(chart_leastsq_real_value_result_enable));
        },
        chartWindowImgWidthDataCreate: (chart_window_img_width)=> {
            dispatch(ChartWindowImgWidthDataAction(chart_window_img_width));
        },
        chartWindowImgHeightDataCreate: (chart_window_img_height)=> {
            dispatch(ChartWindowImgHeightDataAction(chart_window_img_height));
        },
        chartFitLineOptimizedTimeCreate: (chart_fitline_optimized_time)=> {
            dispatch(ChartFitLineOptimizedTimeDataAction(chart_fitline_optimized_time));
        },
        chartFitLineLossValueCreate: (chart_fitline_loss_value)=> {
            dispatch(ChartFitLineLossValueDataAction(chart_fitline_loss_value));
        }
    };
};

const ChartDialogFitLineSettingContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(ChartDialogFitLineSettingWrapper);

export default ChartDialogFitLineSettingContainers;

