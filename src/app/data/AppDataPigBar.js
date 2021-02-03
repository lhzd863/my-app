import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import "../../common/common.css";
import { HorizontalBar } from 'react-chartjs-2';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';


class AppDataPigBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          label: "#",
          prop: "rowid",
          width: 70
        },
        {
          label: "内容",
          prop: "context"
        }
      ],
      display_name: props.display_name || "none",
      display_console: props.display_console || "none",
      dialogvisible: props.dialogvisible || false,
      chart_label: props.chart_label || '当前区域价格',
      chart_label_position: props.chart_label_position || 'top',
      chart_label_enable: props.chart_label_enable || true,
      chart_title: props.chart_title || 'dataset',

      chart_title_position: props.chart_title_position || 'top',
      chart_title_enable: props.chart_title_enable || false,
      chart_xaxis: props.chart_xaxis || '单位：元/斤',
      chart_xaxis_enable: props.chart_xaxis_enable || true,
      chart_yaxis: props.chart_yaxis || 'y',
      chart_yaxis_enable: props.chart_yaxis_enable || false,
      chart_yaxis_position: props.chart_yaxis_position || 'top',
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 130
    };
  }

  componentDidMount() {
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
    let url = global.constants.const_api_url + "/app/data/pig/bar?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        type: tag
      })
    })
      .then(response => response.json())
      .then((dat) => {
        var xarr = [];
        var yarr = [];
        for (var i = 0; i < dat.length; i++) {
          xarr.push(dat[i].region);
          yarr.push(dat[i].price);
        }
        this.props.Xaxis0DataCreate(xarr);
        this.props.Yaxis0DataCreate(yarr);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    const chart_label = this.state.chart_label;
    const chart_label_position = this.state.chart_label_position;
    const chart_label_enable = this.state.chart_label_enable;
    const chart_title = this.state.chart_title;
    const chart_title_position = this.state.chart_title_position;
    const chart_title_enable = this.state.chart_title_enable;
    const chart_xaxis = this.state.chart_xaxis;
    const chart_xaxis_enable = this.state.chart_xaxis_enable;
    const chart_yaxis = this.state.chart_yaxis;
    const chart_yaxis_enable = this.state.chart_yaxis_enable;
    const chart_window_width = this.state.chart_window_width;
    const chart_window_height = this.state.chart_window_height;

    var colorset = [];
    var region = this.props.region;
    if (region === undefined || region.length < 1) {
      region = "河南省";
    }
    for (var i = 0; i < (this.props.xaxis0).length; i++) {
      if (this.props.xaxis0[i] === region) {
        colorset[i] = 'rgba(16, 142, 233,0.7)';
      } else {
        colorset[i] = 'rgba(16, 142, 233,0.2)';
      }
    }

    const data = {
      labels: this.props.xaxis0,
      datasets: [{
        label: chart_label,
        backgroundColor: colorset,
        borderColor: 'rgba(16, 142, 233,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(16, 142, 233,1)',
        hoverBorderColor: 'rgba(16, 142, 233,1)',
        data: this.props.yaxis0
      }]
    };

    return (
      <div key="bar-0">
        <WingBlank size="lg">
          <HorizontalBar
            data={data}
            width={chart_window_width}
            height={chart_window_height}
            options={{
              title: { display: chart_title_enable, text: chart_title, position: chart_title_position },
              legend: { display: chart_label_enable, position: chart_label_position },
              scales: {
                xAxes: [{ scaleLabel: { display: chart_xaxis_enable, labelString: chart_xaxis } }],
                yAxes: [{ scaleLabel: { display: chart_yaxis_enable, labelString: chart_yaxis } }]
              }
            }}
          />
        </WingBlank>
      </div>
    );
  }

  static propTypes = {
    xaxis0: PropTypes.array,
    Xaxis0DataCreate: PropTypes.func,
    yaxis0: PropTypes.array,
    Yaxis0DataCreate: PropTypes.func,
    region: PropTypes.string,
    tag: PropTypes.string,
    select_period: PropTypes.string,
  }
}
const AppDataPigBarWrapper = createForm()(AppDataPigBar);
export default AppDataPigBarWrapper;
