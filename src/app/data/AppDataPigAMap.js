import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import "../../common/common.css";
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { Map } from 'react-amap';

class AppDataPigAMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 130,
      longitude: 0,
      latitude: 0
    };

  }

  componentDidMount() {
    var region = this.props.region;
    if (region === undefined || region.length < 1) {
      region = "河南省";
    }

  }

  render() {

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

    var colors = {};
    var GDPSpeed = {
      '520000': 10,//贵州
      '540000': 10,//西藏
      '530000': 8.5,//云南 
      '500000': 8.5,//重庆
      '360000': 8.5,//江西
      '340000': 8.0,//安徽
      '510000': 7.5,//四川
      '350000': 8.5,//福建
      '430000': 8.0,//湖南
      '420000': 7.5, //湖北
      '410000': 7.5,//河南
      '330000': 7.0,//浙江
      '640000': 7.5,//宁夏
      '650000': 7.0,//新疆
      '440000': 7.0,//广东
      '370000': 7.0,//山东
      '450000': 7.3,//广西
      '630000': 7.0,//青海
      '320000': 7.0,//江苏
      '140000': 6.5,//山西
      '460000': 7,// 海南
      '310000': 6.5,//上海
      '110000': 6.5, // 北京
      '130000': 6.5, // 河北
      '230000': 6, // 黑龙江
      '220000': 6,// 吉林
      '210000': 6.5, //辽宁
      '150000': 6.5,//内蒙古
      '120000': 5,// 天津
      '620000': 6,// 甘肃
      '610000': 8.5,// 甘肃
      '710000': 2.64, //台湾
      '810000': 3.0, //香港
      '820000': 4.7 //澳门

    };

    const amapEvents = {
      created: (mapInstance) => {
        let disCountry;
        window.AMap.plugin('AMap.DistrictLayer',() => {
          disCountry = new window.AMap.DistrictLayer.Country({
            zIndex: 10,
            SOC: 'CHN',
            depth: 1,
            styles: {
              'nation-stroke': '#ff6600',
              'coastline-stroke': 'ff8800',
              'province-stroke': 'white',
              'fill': function (props) {
                return getColorByDGP(props.adcode_pro);
              }
            }
          });
        });
        

        mapInstance.setLayer(disCountry);
      }
    };


    var getColorByDGP = function (adcode) {
      if (!colors[adcode]) {
        var gdp = GDPSpeed[adcode];
        if (!gdp) {
          colors[adcode] = 'rgb(227,227,227)';
        } else {
          var r = 3;
          var g = 140;
          var b = 230;
          var a = gdp / 10;
          colors[adcode] = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
        }
      }
      return colors[adcode];
    };


    // const LayerCell = (props) => {
    //   const map = props.__map__;
    //   if (!map) {
    //     return (<div></div>);
    //   }
    //   return (<div></div>);
    // };
    const longitude = this.props.lbs_longitude;
    const latitude = this.props.lbs_latitude;
    //const center = { longitude: longitude, latitude: latitude };

    return (
      <div key="bar-0">
        <WingBlank size="lg">
          <div style={{ width: '100%', height: '400px' }}>
            <Map amapkey={global.constants.const_amap_key} events={amapEvents} plugins={["ToolBar", 'Scale']}>
            </Map>
          </div>
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
    lbs_longitude: PropTypes.string,
    LbsLongitudeCreate: PropTypes.func,
    lbs_latitude: PropTypes.string,
    LbsLatitudeCreate: PropTypes.func,
  }
}
const AppDataPigAMapWrapper = createForm()(AppDataPigAMap);
export default AppDataPigAMapWrapper;
