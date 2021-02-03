import React, { Component } from 'react';
import { Slider as Slider1 } from 'antd-mobile';
import { Button, Dialog, Form, Select, InputNumber } from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

class Txt2AudioDialogSetting extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 70
    };
    this.props.txt2audioRateCreate(100);
    this.props.txt2audioVolumeCreate(1.0);
    this.props.txt2audioVoiceCreate('zh');
  }

  handleClickDialogSubmit() {
    this.props.dialogVisibleDataCreate(false);
  }

  handleClickDialogSelectChangeLabelVoice(e) {
    if (e === undefined) {
      this.props.txt2audioVoiceCreate('zh');
    } else {
      this.props.txt2audioVoiceCreate(e);
    }
  }

  handleClickDialogSelectChangeLabelRate(e) {
    if (e === undefined) {
      this.props.txt2audioRateCreate(100);
    } else {
      this.props.txt2audioRateCreate(e);
    }
  }

  handleClickDialogSelectChangeLabelVolume(e) {
    if (e === undefined) {
      this.props.txt2audioVolumeCreate(1.0);
    } else {
      this.props.txt2audioVolumeCreate(e / 10.0);
    }
  }

  render() {
    const dialogvisible = this.props.dialogvisible;
    const const_app_txt2audio_voice = this.props.txt2audio_voice;
    const const_app_txt2audio_rate = this.props.txt2audio_rate;
    const const_app_txt2audio_volume = this.props.txt2audio_volume;

    const dialogSelectOptions = [{
      value: 'zh',
      label: '男声1'
    }];

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
              <Form.Item label={global.constants.const_app_txt2audio_voice} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Select value={const_app_txt2audio_voice} onChange={(e) => this.handleClickDialogSelectChangeLabelVoice(e)} >
                  {
                    dialogSelectOptions.map(el => {
                      return (<Select.Option key={el.value} label={el.label} value={el.value} />);
                    })
                  }
                </Select>
              </Form.Item>
              <Form.Item label={global.constants.const_app_txt2audio_rate} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <InputNumber
                  defaultValue={const_app_txt2audio_rate}
                  onChange={(e) => this.handleClickDialogSelectChangeLabelRate(e)} >
                </InputNumber>
              </Form.Item>
              <Form.Item label={global.constants.const_app_txt2audio_volume} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                <Slider1
                  style={{ marginLeft: 10, marginRight: 10 }}
                  defaultValue={const_app_txt2audio_volume*10}
                  min={0}
                  max={10}
                  onChange={(e) => this.handleClickDialogSelectChangeLabelVolume(e)}
                  onAfterChange={(e) => this.handleClickDialogSelectChangeLabelVolume(e)}
                />
              </Form.Item>
            </Form>
          </Dialog.Body>
          <Dialog.Footer className="dialog-footer">
            <Button onClick={() => { this.props.dialogVisibleDataCreate(false); }}>{global.constants.const_cancel}</Button>
            <Button type="primary" onClick={() => { this.handleClickDialogSubmit(); }}>{global.constants.const_ok}</Button>
          </Dialog.Footer>
        </Dialog>
      </div>
    );
  }

  static propTypes = {
    dialogvisible: PropTypes.bool,
    dialogVisibleDataCreate: PropTypes.func,
    txt2audio_rate: PropTypes.number,
    txt2audioRateCreate: PropTypes.func,
    txt2audio_voice: PropTypes.string,
    txt2audioVoiceCreate: PropTypes.func,
    txt2audio_volume: PropTypes.number,
    txt2audioVolumeCreate: PropTypes.func,
    txt2audio_voices: PropTypes.string,
    txt2audioVoicesCreate: PropTypes.func,
  }
}
const Txt2AudioDialogSettingWrapper = createForm()(Txt2AudioDialogSetting);
export default Txt2AudioDialogSettingWrapper;
