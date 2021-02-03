import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { Line } from 'react-chartjs-2';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import '../../config.js';
import AppDataPigDialogSettingContainers from '../../redux/containers/AppDataPigDialogSettingContainers.js';
import AppDataPigBarContainers from '../../redux/containers/AppDataPigBarContainers.js';
import { Button } from 'element-react';
import 'element-theme-default';

class AppDataPigHis extends Component {

  constructor(props) {
    super(props);
    this.state = {
      xaxis: props.xaxis || [],
      yaxis: props.yaxis || [],
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 70,
      chart_label: props.chart_label || 'dataset',
      chart_label_position: props.chart_label_position || 'top',
      chart_label_enable: props.chart_label_enable || true,
      chart_title: props.chart_title || 'dataset',
      chart_title_position: props.chart_title_position || 'top',
      chart_title_enable: props.chart_title_enable || true,
      chart_xaxis: props.chart_xaxis || '日期',
      chart_xaxis_enable: props.chart_xaxis_enable || true,
      chart_yaxis: props.chart_yaxis || '价格(元/斤)',
      chart_yaxis_enable: props.chart_yaxis_enable || true,
      region: '河南省',
      select_period: '',
      tag: '',
      pickerValue: ''
    };
  }

  handleOnChanageRegion(e) {
    this.props.tagDataCreate(e.nativeEvent.value);
    var select_index = e.nativeEvent.selectedSegmentIndex.toString();
    this.props.selectIndexDataCreate(select_index);
    var period = this.props.select_period;
    this.props.selectPeriodDataCreate(period);
    this.handleData();
  }

  handleOnAfterChange(e) {
    this.props.selectPeriodDataCreate(e.toString());
    this.handleData();
  }
  handleProvinceChange(e) {
    console.log(e);
  }
  handleData() {
    var region = this.props.region;
    var tag = this.props.tag;
    var period = this.props.select_period;
    if (tag === undefined || tag.length < 1) {
      tag = "日";
    }
    if (region === undefined || region.length < 1) {
      region = "河南省";
    }
    if (period === undefined || period.length < 1) {
      period = "30";
    }
    if (tag === '月') {
      tag = "10";
    } else {
      tag = "7";
    }

    let accesstoken = '';
    if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
      JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
      accesstoken = global.constants.const_default_accesstoken;
    } else {
      accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/app/data/pig?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        region: region,
        type: tag,
        period: period
      })
    })
      .then(response => response.json())
      .then((dat) => {
        var xarr = [];
        var yarr = [];
        for (var i = dat.length - 1; i >= 0; i--) {
          xarr.push(dat[i].dt);
          yarr.push(dat[i].price);
        }
        this.props.arrayXDataCreate(xarr);
        this.props.arrayYDataCreate(yarr);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleClickDialog() {
    this.props.dialogVisibleDataCreate(true);
  }

  componentDidMount() {
    this.props.tagDataCreate("");
    this.props.selectIndexDataCreate("3");
    this.props.selectPeriodDataCreate("30");
    this.props.arrayXDataCreate([]);
    this.props.arrayYDataCreate([]);
    this.handleData();
  }

  render() {
    //const { getFieldProps } = this.props.form;
    //console.log(this.props)
    const chart_window_width = this.state.chart_window_width;
    const chart_window_height = this.state.chart_window_height;
    const chart_label = this.props.region || '河南省';

    const data = {
      labels: this.props.xaxis,
      datasets: [
        {
          label: chart_label,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.yaxis
        }
      ]
    };
    const chart_title_enable = this.state.chart_title_enable;
    const chart_title = '猪-价格';
    const chart_title_position = this.state.chart_title_position;
    const chart_label_enable = this.state.chart_label_enable;
    const chart_label_position = this.state.chart_label_position;
    const chart_xaxis_enable = this.state.chart_xaxis_enable;
    const chart_xaxis = this.state.chart_xaxis;
    const chart_yaxis_enable = this.state.chart_yaxis_enable;
    const chart_yaxis = this.state.chart_yaxis;

    return (
      <div>
        <MyHeader myheadertitle={global.constants.const_app_pig_his} />
        <WingBlank size="lg">
          <div key='bnt-1' style={{ display: 'inline-block' }}>
            <Button type="text" icon="setting" onClick={() => { this.handleClickDialog(); }}  >设置</Button>
          </div>
        </WingBlank>
        <div className="price-pig-sub-title">价格趋势</div>
        <WingBlank size="lg">
          <div key='line-1' >
            <Line
              data={data}
              width={chart_window_width}
              height={chart_window_height}
              options={{
                title: { display: chart_title_enable, text: chart_title, position: chart_title_position },
                legend: { display: chart_label_enable, position: chart_label_position },
                scales: {
                  xAxes: [{ scaleLabel: { display: chart_xaxis_enable, labelString: chart_xaxis } }], yAxes: [{
                    scaleLabel:
                      { display: chart_yaxis_enable, labelString: chart_yaxis }
                  }]
                }
              }}
            />
          </div>
          <WhiteSpace />
        </WingBlank>
        <AppDataPigDialogSettingContainers />
        <div className="price-pig-sub-title">区域价格</div>
        <AppDataPigBarContainers />
      </div>
    );
  }

  static propTypes = {
    xaxis: PropTypes.array,
    arrayXDataCreate: PropTypes.func,
    yaxis: PropTypes.array,
    arrayYDataCreate: PropTypes.func,
    chart_xaxis: PropTypes.string,
    chart_yaxis: PropTypes.string,
    region: PropTypes.string,
    regionDataCreate: PropTypes.func,
    tag: PropTypes.string,
    tagDataCreate: PropTypes.func,
    select_period: PropTypes.string,
    selectPeriodDataCreate: PropTypes.func,
    select_index: PropTypes.string,
    selectIndexDataCreate: PropTypes.func,
    dialogvisible: PropTypes.bool,
    dialogVisibleDataCreate: PropTypes.func,
  }
}
const AppDataPigHisWrapper = createForm()(AppDataPigHis);
export default AppDataPigHisWrapper;

