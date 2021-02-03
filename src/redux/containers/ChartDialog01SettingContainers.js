import {connect} from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import ChartLabelDataAction from '../actions/ChartLabelDataAction.js';
import ChartLabelPositionDataAction from '../actions/ChartLabelPositionDataAction.js';
import ChartLabelEnableDataAction from '../actions/ChartLabelEnableDataAction.js';
import ChartTitleDataAction from '../actions/ChartTitleDataAction.js';
import ChartTitlePositionDataAction from '../actions/ChartTitlePositionDataAction.js';
import ChartTitleEnableDataAction from '../actions/ChartTitleEnableDataAction.js';
import ChartXaxisDataAction from '../actions/ChartXaxisDataAction.js';
import ChartXaxisEnableDataAction from '../actions/ChartXaxisEnableDataAction.js';
import ChartYaxisDataAction from '../actions/ChartYaxisDataAction.js';
import ChartYaxisEnableDataAction from '../actions/ChartYaxisEnableDataAction.js';
import ChartWindowWidthDataAction from '../actions/ChartWindowWidthDataAction.js';
import ChartWindowHeightDataAction from '../actions/ChartWindowHeightDataAction.js';
import ChartDialog01Setting from '../../components/ChartDialog01Setting.js';

const mapStateToProps = state => {
    return {
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
        dialogVisibleDataCreate: (dialogvisible)=> {
            dispatch(DialogVisibleDataAction(dialogvisible));
        },
        chartLabelDataCreate: (chart_label)=> {
            dispatch(ChartLabelDataAction(chart_label));
        },
        chartLabelPositionDataCreate: (chart_label_position)=> {
            dispatch(ChartLabelPositionDataAction(chart_label_position));
        },
        chartLabelEnableDataCreate: (chart_label_enable)=> {
            dispatch(ChartLabelEnableDataAction(chart_label_enable));
        },
        chartTitleDataCreate: (chart_title)=> {
            dispatch(ChartTitleDataAction(chart_title));
        },
        chartTitlePositionDataCreate: (chart_title_position)=> {
            dispatch(ChartTitlePositionDataAction(chart_title_position));
        },
        chartTitleEnableDataCreate: (chart_title_enable)=> {
            dispatch(ChartTitleEnableDataAction(chart_title_enable));
        },
        chartXaxisDataCreate: (chart_xaxis)=> {
            dispatch(ChartXaxisDataAction(chart_xaxis));
        },
         chartXaxisEnableDataCreate: (chart_xaxis_enable)=> {
            dispatch(ChartXaxisEnableDataAction(chart_xaxis_enable));
        },
        chartYaxisDataCreate: (chart_yaxis)=> {
            dispatch(ChartYaxisDataAction(chart_yaxis));
        },
        chartYaxisEnableDataCreate: (chart_yaxis_enable)=> {
            dispatch(ChartYaxisEnableDataAction(chart_yaxis_enable));
        },
        chartWindowWidthDataCreate: (chart_window_width)=> {
            dispatch(ChartWindowWidthDataAction(chart_window_width));
        },
        chartWindowHeightDataCreate: (chart_window_height)=> {
            dispatch(ChartWindowHeightDataAction(chart_window_height));
        }
    };
};

const ChartDialog01SettingContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(ChartDialog01Setting);

export default ChartDialog01SettingContainers;

