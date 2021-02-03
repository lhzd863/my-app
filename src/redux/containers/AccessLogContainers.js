import { connect } from 'react-redux';
import StatTotalNumAction from '../actions/StatTotalNumAction.js';
import StatIpNumAction from '../actions/StatIpNumAction.js';
import StatCurNumAction from '../actions/StatCurNumAction.js';
import StatCurIpNumAction from '../actions/StatCurIpNumAction.js';
import StatDtAction from '../actions/StatDtAction.js';
import AccessLogStatWrapper from '../../app/stat/AccessLogStat.js';

const mapStateToProps = state => {
    console.log(state)
    return {
          stat_total_num: state.StatTotalNumReducer.stat_total_num,
	  stat_ip_num: state.StatIpNumReducer.stat_ip_num,
	  stat_cur_num: state.StatCurNumReducer.stat_cur_num,
          stat_dt: state.StatDtReducer.stat_dt,
	  stat_cur_ip_num: state.StatCurIpNumReducer.stat_cur_ip_num,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        statTotalNumCreate: (stat_total_num) => {
            dispatch(StatTotalNumAction(stat_total_num));
        },
	    statIpNumCreate: (stat_ip_num) => {
            dispatch(StatIpNumAction(stat_ip_num));
        },
	    statCurNumCreate: (stat_cur_num) => {
            dispatch(StatCurNumAction(stat_cur_num));
        },
	    statCurIpNumCreate: (stat_cur_ip_num) => {
            dispatch(StatCurIpNumAction(stat_cur_ip_num));
        },
            statDtCreate: (stat_dt) => {
            dispatch(StatDtAction(stat_dt));
        },
    };
};

const AccessLogStatContainers = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccessLogStatWrapper);

export default AccessLogStatContainers;

