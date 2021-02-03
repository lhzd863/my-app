import React, { Component } from 'react';
import { Button, Dialog, Form, Select, Switch, InputNumber } from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

class AppDataPigDialogSetting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 70
    };
  }

  handleClickDialogSubmit() {
    this.props.dialogVisibleDataCreate(false);
    this.handleData();

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
      tag = "7";
    } else {
      tag = "30";
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

  handleClickDialogSelectChangeLabelProvince(e) {
    if (e === undefined) {
      this.props.regionDataCreate('河南省');
    } else {
      this.props.regionDataCreate(e);
    }
  }

  handleClickDialogSelectChangeLabelTag(e) {
    if (e === undefined) {
      this.props.tagDataCreate(global.constants.const_month);
    } else {
      this.props.tagDataCreate(e === true ? '天' : '月');
    }
  }

  handleClickDialogSelectChangePeriod(e) {
    if (e === undefined) {
      this.props.selectPeriodDataCreate("30");
    } else {
      this.props.selectPeriodDataCreate(e);
    }
  }

  render() {
    const dialogvisible = this.props.dialogvisible;
    const chart_label_tag = this.props.tag === '天' ? true : false;
    const chart_label_province = this.props.region || '河南省';
    const chart_label_period = Number(this.props.select_period) || 30;

    const dialogSelectOptions = [{
      value: '河南省',
      label: '河南省'
    }, {
      value: '山东省',
      label: '山东省'
    }, {
      value: '湖北省',
      label: '湖北省'
    }, {
      value: '安徽省',
      label: '安徽省'
    }, {
      value: '湖南省',
      label: '湖南省'
    }, {
      value: '浙江省',
      label: '浙江省'
    }, {
      value: '江苏省',
      label: '江苏省'
    }, {
      value: '河北省',
      label: '河北省'
    }, {
      value: '山西省',
      label: '山西省'
    }, {
      value: '江西省',
      label: '江西省'
    }, {
      value: '广东省',
      label: '广东省'
    }, {
      value: '福建省',
      label: '福建省'
    }, {
      value: '四川省',
      label: '四川省'
    }, {
      value: '重庆市',
      label: '重庆市'
    }, {
      value: '西藏',
      label: '西藏'
    }, {
      value: '新疆',
      label: '新疆'
    }, {
      value: '宁夏',
      label: '宁夏'
    }, {
      value: '海南',
      label: '海南'
    }, {
      value: '上海市',
      label: '上海市'
    }, {
      value: '北京市',
      label: '北京市'
    }, {
      value: '黑龙江省',
      label: '黑龙江省'
    }, {
      value: '吉林省',
      label: '吉林省'
    }, {
      value: '辽宁省',
      label: '辽宁省'
    }, {
      value: '内蒙古',
      label: '内蒙古'
    }, {
      value: '天津市',
      label: '天津市'
    }, {
      value: '甘肃省',
      label: '甘肃省'
    }, {
      value: '台湾省',
      label: '台湾省'
    }, {
      value: '香港',
      label: '香港'
    }, {
      value: '澳门',
      label: '澳门'
    }, {
      value: '青海省',
      label: '青海省'
    }, {
      value: '广西省',
      label: '广西省'
    }, {
      value: '贵州省',
      label: '贵州省'
    }, {
      value: '云南省',
      label: '云南省'
    }
    ];

    return (
      <div>
        <Dialog
          title={global.constants.const_app_setting}
          visible={dialogvisible}
          size="large"
          onCancel={() => { this.props.dialogVisibleDataCreate(false); }}
        >
          <Dialog.Body>
            <Form >
              <Form.Item label={global.constants.const_app_province} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Select value={chart_label_province} onChange={(e) => this.handleClickDialogSelectChangeLabelProvince(e)} >
                  {
                    dialogSelectOptions.map(el => {
                      return (<Select.Option key={el.value} label={el.label} value={el.value} />);
                    })
                  }
                </Select>
              </Form.Item>
              <Form.Item label={global.constants.const_app_grain_size} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Switch
                  value={chart_label_tag}
                  onText={global.constants.const_day}
                  offText={global.constants.const_month}
                  onChange={(e) => this.handleClickDialogSelectChangeLabelTag(e)}
                >
                </Switch>
              </Form.Item>
              <Form.Item label={global.constants.const_app_period} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <InputNumber defaultValue={chart_label_period} onChange={(e) => this.handleClickDialogSelectChangePeriod(e.toString())} ></InputNumber>
              </Form.Item>
            </Form>
          </Dialog.Body>

          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => { this.props.dialogVisibleDataCreate(false); }}>取 消</Button>
            <Button type="primary" onClick={() => { this.handleClickDialogSubmit(); }}>确 定</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }

  static propTypes = {
    dialogvisible: PropTypes.bool,
    dialogVisibleDataCreate: PropTypes.func,
    region: PropTypes.string,
    regionDataCreate: PropTypes.func,
    tag: PropTypes.string,
    tagDataCreate: PropTypes.func,
    select_period: PropTypes.string,
    selectPeriodDataCreate: PropTypes.func,
    xaxis: PropTypes.array,
    arrayXDataCreate: PropTypes.func,
    yaxis: PropTypes.array,
    arrayYDataCreate: PropTypes.func,
  }
}
const AppDataPigDialogSettingWrapper = createForm()(AppDataPigDialogSetting);
export default AppDataPigDialogSettingWrapper;
