import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { Line } from 'react-chartjs-2';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import '../../config.js';
import AppDataPricePigDialogSettingContainers from '../../redux/containers/AppDataPricePigDialogSettingContainers.js';
import { Button } from 'element-react';
import 'element-theme-default';

function CurentTime() {
  var now = new Date();
  var month = now.getMonth() + 1;     //月
  var day = now.getDate();            //日

  var clock = "";

  if (month < 10)
    clock += "0";

  clock += month + "-";

  if (day < 10)
    clock += "0";

  clock += day;

  return (clock);
}

class AppPricePig extends Component {

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
      chart_xaxis: props.chart_xaxis || '日期（月-日）',
      chart_xaxis_enable: props.chart_xaxis_enable || true,
      chart_yaxis: props.chart_yaxis || '价格',
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
    if (tag === undefined || tag.length < 1) {
      tag = "pig";
    }
    this.props.Xaxis0Create([]);
    this.props.Yaxis0Create([]);
    this.props.Yaxis1Create([]);
    this.props.Yaxis2Create([]);
    this.props.Yaxis3Create([]);

    let accesstoken = '';
    if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
      JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
      accesstoken = global.constants.const_default_accesstoken;
    } else {
      accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/app/price/pig?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        region: region,
        type: tag
      })
    })
      .then(response => response.json())
      .then((dat) => {

        var xarr = [];
        var yarr = [];
        var y1arr = [];
        var y2arr = [];
        var y3arr = [];
        var ty0 = 0, ty1 = 0, ty2 = 0, ty3 = 0;
        var cur_dt = CurentTime();
        for (var i = 0; i < dat.length; i++) {
          xarr[i] = dat[i].days.toString();

          if (Number(dat[i].cur_price) !== 0) {
            ty0 = Number(dat[i].cur_price);
          }
          if (cur_dt > dat[i].days.toString()) {
            yarr.push(ty0);
          }
          if (Number(dat[i].last_price) !== 0) {
            ty1 = Number(dat[i].last_price);
          }
          y1arr.push(ty1);

          if (Number(dat[i].last1_price) !== 0) {
            ty2 = Number(dat[i].last1_price);
          }
          y2arr.push(ty2);

          if (Number(dat[i].total_price) !== 0) {
            ty3 = Number(dat[i].total_price);
          }
          y3arr.push(ty3);

        }
        this.props.Xaxis0Create(xarr);
        this.props.Yaxis0Create(yarr);
        this.props.Yaxis1Create(y1arr);
        this.props.Yaxis2Create(y2arr);
        this.props.Yaxis3Create(y3arr);
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
    this.props.Xaxis0Create([]);
    this.props.Yaxis0Create([]);
    this.props.Yaxis1Create([]);
    this.props.Yaxis2Create([]);
    this.props.Yaxis3Create([]);
    this.handleData();
  }

  render() {
    //const { getFieldProps } = this.props.form;
    //console.log(this.props)
    const chart_window_width = this.state.chart_window_width;
    const chart_window_height = this.state.chart_window_height;

    const data = {
      labels: this.props.xaxis0,
      datasets: [
        {
          label: '价格',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.7)',
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
          data: this.props.yaxis0
        },
        {
          label: '价格-上一年',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255,0,0,0.4)',
          borderColor: 'rgba(255,0,0,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(255,0,0,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(255,0,0,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.yaxis1
        },
        {
          label: '价格-上二年',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(175,92,232,0.4)',
          borderColor: 'rgba(175,92,232,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(175,132,232,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(175,132,232,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.yaxis2
        },
        {
          label: '价格-历史平均',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(7,12,192,0.4)',
          borderColor: 'rgba(7,12,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(7,12,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(7,12,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.props.yaxis3
        },
      ]
    };
    const chart_title_enable = this.state.chart_title_enable;
    var chart_yaxis = this.state.chart_yaxis;
    var chart_title = '价格';
    if (this.props.tag === 'pig' || this.props.tag.length < 1) {
      chart_title = '生猪-' + chart_title;
      chart_yaxis = chart_yaxis + '(元/斤)';
    } else if (this.props.tag === 'corn') {
      chart_title = '玉米-' + chart_title;
      chart_yaxis = chart_yaxis + '(元/吨)';
    } else if (this.props.tag === 'bean') {
      chart_title = '豆粕-' + chart_title;
      chart_yaxis = chart_yaxis + '(元/吨)';
    }

    const chart_title_position = this.state.chart_title_position;
    const chart_label_enable = this.state.chart_label_enable;
    const chart_label_position = this.state.chart_label_position;
    const chart_xaxis_enable = this.state.chart_xaxis_enable;
    const chart_xaxis = this.state.chart_xaxis;
    const chart_yaxis_enable = this.state.chart_yaxis_enable;


    return (
      <div>
        <MyHeader myheadertitle={global.constants.const_app_price_pig_his} />
        <WingBlank size="lg">
          <div key='bnt-1' style={{ display: 'inline-block' }}>
            <Button type="text" icon="setting" onClick={() => { this.handleClickDialog(); }}  >设置</Button>
          </div>
        </WingBlank>
        <div className="price-pig-sub-title">同期价格</div>
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
        <AppDataPricePigDialogSettingContainers />
      </div>
    );
  }

  static propTypes = {
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
    xaxis0: PropTypes.array,
    Xaxis0Create: PropTypes.func,
    xaxis1: PropTypes.array,
    Xaxis1Create: PropTypes.func,
    xaxis2: PropTypes.array,
    Xaxis2Create: PropTypes.func,
    yaxis0: PropTypes.array,
    Yaxis0Create: PropTypes.func,
    yaxis1: PropTypes.array,
    Yaxis1Create: PropTypes.func,
    yaxis2: PropTypes.array,
    Yaxis2Create: PropTypes.func,
    yaxis3: PropTypes.array,
    Yaxis3Create: PropTypes.func,
  }
}
const AppPricePigWrapper = createForm()(AppPricePig);
export default AppPricePigWrapper;

