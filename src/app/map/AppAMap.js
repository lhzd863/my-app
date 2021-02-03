import React, { Component } from 'react';
import { WingBlank } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { Map, Marker } from 'react-amap';
import AppAmapDialogSettingContainers from '../../redux/containers/AppAmapDialogSettingContainers.js';
import { Button } from 'element-react';
import 'element-theme-default';

class AppAMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 130
    };
  }

  componentDidMount() {
    var region = this.props.region;
    if (region === undefined || region.length < 1) {
      region = "上海市";
    }
    fetch('https://restapi.amap.com/v3/geocode/geo?output=JSON&key=' + global.constants.const_amap_key + '&address=' + region)
      .then(res => {
        if (res.ok) {
          res.json().then(data => {
            var list = data.geocodes;
            var geocodes = list[0]['location'].split(',');
            this.props.LbsLongitudeCreate(geocodes[0].toString());
            this.props.LbsLatitudeCreate(geocodes[1].toString());
          });
        }
      });
  }

  handleClickDialog() {
    this.props.dialogVisibleDataCreate(true);
  }

  render() {

    const longitude = this.props.lbs_longitude;
    const latitude = this.props.lbs_latitude;
    const center = { longitude: longitude, latitude: latitude };
    const tag = this.props.tag;
    const icon_url = this.props.icon_url;
    const styleC = {
      background: `url('` + icon_url + `')`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      width: '128px',
      height: '40px',
      color: '#000',
      textAlign: 'center',
      lineHeight: '30px'
    };

    return (
      <div>
        <MyHeader myheadertitle={global.constants.const_app_map_marker} />
        <WingBlank size="lg">
          <div key='bnt-1' style={{ display: 'inline-block' }}>
            <Button type="text" icon="setting" onClick={() => { this.handleClickDialog(); }}  >设置</Button>
          </div>
        </WingBlank>
        <WingBlank size="lg">
          <div key='map-1' style={{ width: '100%', height: '400px' }}>
            <Map amapkey={global.constants.const_amap_key} center={center} >
              <Marker position={{ longitude: longitude, latitude: latitude }} >
                <div key='title-1' style={styleC}>{tag}</div>
              </Marker>
            </Map>
          </div>
        </WingBlank>
        <AppAmapDialogSettingContainers />
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
    icon_url: PropTypes.string,
    IconUrlCreate: PropTypes.func,
    lbs_longitude: PropTypes.string,
    LbsLongitudeCreate: PropTypes.func,
    lbs_latitude: PropTypes.string,
    LbsLatitudeCreate: PropTypes.func,
  }
}
const AppAMapWrapper = createForm()(AppAMap);
export default AppAMapWrapper;
