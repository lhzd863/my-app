import React, { Component } from 'react';
import { Button, Dialog, Form, Select } from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

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
          xarr.push(dat[i].days);

          if (Number(dat[i].cur_price) !== 0) {
            ty0 = dat[i].cur_price;
          }
          if (cur_dt > dat[i].days.toString()) {
            yarr.push(ty0);
          }

          if (Number(dat[i].last_price) !== 0) {
            ty1 = dat[i].last_price;
          }
          y1arr.push(ty1);

          if (Number(dat[i].last1_price) !== 0) {
            ty2 = dat[i].last1_price;
          }
          y2arr.push(ty2);

          if (Number(dat[i].total_price) !== 0) {
            ty3 = dat[i].total_price;
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

  handleClickDialogSelectChangeLabelProvince(e) {
    if (e === undefined) {
      this.props.regionDataCreate('河南省');
    } else {
      this.props.regionDataCreate(e);
    }
  }

  handleClickDialogSelectChangeLabelType(e) {
    if (e === undefined) {
      this.props.tagDataCreate('pig');
    } else {
      this.props.tagDataCreate(e);
    }
  }

  render() {
    const dialogvisible = this.props.dialogvisible;
    
    const chart_label_province = this.props.region || '河南省';

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

    const typeDialogSelectOptions = [{
      value: 'pig',
      label: '生猪'
    }, {
      value: 'corn',
      label: '玉米'
    }, {
      value: 'bean',
      label: '豆粕'
    }
    ];
    var chart_label_tag = this.props.tag ;
    if (chart_label_tag === undefined || chart_label_tag.length < 1) {
      chart_label_tag = "pig";
    } 

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
              <Form.Item label={global.constants.const_app_price_type} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Select value={chart_label_tag} onChange={(e) => this.handleClickDialogSelectChangeLabelType(e)} >
                  {
                    typeDialogSelectOptions.map(el => {
                      return (<Select.Option key={el.value} label={el.label} value={el.value} />);
                    })
                  }
                </Select>
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
  }
}
const AppDataPigDialogSettingWrapper = createForm()(AppDataPigDialogSetting);
export default AppDataPigDialogSettingWrapper;
