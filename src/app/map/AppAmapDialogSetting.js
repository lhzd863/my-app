import React, { Component } from 'react';
import { Button, Dialog, Form, Input } from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';


class AppAmapDialogSetting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 70
    };
  }

  handleClickDialogSubmit() {
    this.props.dialogVisibleDataCreate(false);
    var input_title = this.refs.input_title.props.value;
    if (input_title === undefined || input_title.length < 1) {
      input_title = "Hi";
    }
    this.props.tagDataCreate(input_title);

    var input_address = this.refs.input_address.props.value;
    if (input_address === undefined || input_address.length < 1) {
      input_address = "上海市";
    }
    this.props.regionDataCreate(input_address);

    var input_icon = this.refs.input_icon.props.value;
    if (input_icon === undefined || input_icon.length < 1) {
      input_icon = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png";
    }
    this.props.IconUrlCreate(input_icon);

    this.handleData();
    this.forceUpdate();
  }
  handleData() {
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

  render() {
    const { getFieldProps } = this.props.form;
    const dialogvisible = this.props.dialogvisible;
    const input_title = this.props.tag;
    const input_icon = this.props.icon_url;
    const input_address = this.props.region;

    return (
      <div key='dialog-1'>
        <Dialog
          title={global.constants.const_app_setting}
          visible={dialogvisible}
          size="large"
          onCancel={() => { this.props.dialogVisibleDataCreate(false); }}
        >
          <Dialog.Body>
            <Form >
              <Form.Item label={global.constants.const_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Input {...getFieldProps('input_title')}
                  placeholder={input_title}
                  ref="input_title"
                />
              </Form.Item>
              <Form.Item label={global.constants.const_app_map_marker_icon} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Input {...getFieldProps('input_icon')}
                  type="textarea"
                  placeholder={input_icon}
                  ref="input_icon"
                />
              </Form.Item>
              <Form.Item label={global.constants.const_app_map_address} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Input {...getFieldProps('input_address')}
                  type="textarea"
                  placeholder={input_address}
                  ref="input_address"
                />
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
    icon_url: PropTypes.string,
    IconUrlCreate: PropTypes.func,
    lbs_longitude: PropTypes.string,
    LbsLongitudeCreate: PropTypes.func,
    lbs_latitude: PropTypes.string,
    LbsLatitudeCreate: PropTypes.func,
  }
}
const AppAmapDialogSettingWrapper = createForm()(AppAmapDialogSetting);
export default AppAmapDialogSettingWrapper;
