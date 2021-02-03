import {connect} from 'react-redux';
import DialogVisibleDataAction from '../actions/DialogVisibleDataAction.js';
import ChartLabelDataAction from '../actions/ChartLabelDataAction.js';
import ChartLabelPositionDataAction from '../actions/ChartLabelPositionDataAction.js';
import ChartLabelEnableDataAction from '../actions/ChartLabelEnableDataAction.js';
import ChartTitleDataAction from '../actions/ChartTitleDataAction.js';
import ChartTitlePositionDataAction from '../actions/ChartTitlePositionDataAction.js';
import ChartTitleEnableDataAction from '../actions/ChartTitleEnableDataAction.js';
import ChartDialogSettingWithoutAxisWindowSizeWrapper from '../../components/ChartDialogSettingWithoutAxisWindowSize.js';

const mapStateToProps = state => {
    return {
        dialogvisible: state.DialogVisibleDataReducer.dialogvisible,
        chart_label: state.ChartLabelDataReducer.chart_label,
        chart_label_position: state.ChartLabelPositionDataReducer.chart_label_position,
        chart_label_enable: state.ChartLabelEnableDataReducer.chart_label_enable,
        chart_title: state.ChartTitleDataReducer.chart_title,
        chart_title_position: state.ChartTitlePositionDataReducer.chart_title_position,
        chart_title_enable: state.ChartTitleEnableDataReducer.chart_title_enable
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
        }
    };
};

const ChartDialogSettingWithoutAxisWindowSizeContainers = connect(
   mapStateToProps,
   mapDispatchToProps
)(ChartDialogSettingWithoutAxisWindowSizeWrapper);

export default ChartDialogSettingWithoutAxisWindowSizeContainers;

