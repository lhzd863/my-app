import React, { Component } from 'react';
import { WingBlank, WhiteSpace, TextareaItem,Toast,Button as Button1 } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import '../../config.js';
import Txt2AudioDialogSettingContainers from '../../redux/containers/Txt2AudioDialogSettingContainers.js';
import { Button } from 'element-react';
import 'element-theme-default';

class Txt2Audio extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chart_window_width: props.chart_window_width || 100,
      chart_window_height: props.chart_window_height || 70,
      txt2audio_url: '',
      displayconsole: 'none'
    };
    this.props.displayConsoleCreate('none');
  }

  handleData() {
    var txt2audio_rate = this.props.txt2audio_rate;
    if (txt2audio_rate === undefined || txt2audio_rate.length < 1) {
      txt2audio_rate = 100;
    }

    var txt2audio_volume = this.props.txt2audio_volume;
    if (txt2audio_volume === undefined || txt2audio_volume.length < 1) {
      txt2audio_volume = 1.0;
    }

    var txt2audio_text = this.refs.input_data.props.value;
    if (txt2audio_text === undefined || txt2audio_text.length < 1) {
      Toast.info(global.constants.const_app_chart_inputdata, 2, null, false);
      return;
    }

    var txt2audio_voice = this.props.txt2audio_voice;
    if (txt2audio_voice === undefined || txt2audio_voice.length < 1) {
      txt2audio_voice = "zh";
    }

    let accesstoken = '';
    if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
      JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
      accesstoken = global.constants.const_default_accesstoken;
    } else {
      accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
    }
    this.props.displayConsoleCreate('none');
    let url = global.constants.const_api_url + "/app/audio/txt2audio?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        rate: txt2audio_rate,
        text: txt2audio_text,
        volume: txt2audio_volume,
        voice: txt2audio_voice
      })
    })
      .then(response => response.json())
      .then((dat) => {
        this.setState({ txt2audio_url: dat[0].url, displayconsole: 'none' });
        this.props.displayConsoleCreate('block');
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  handleClickDialog() {
    this.props.dialogVisibleDataCreate(true);
  }

  handleClickDownload() {
    this.handleData();
  }

  handleClickPlay() {
    this.handleData();
  }

  render() {
    const { getFieldProps } = this.props.form;
    const const_play_url = this.state.txt2audio_url;
    const const_displayconsole = this.props.display_console;

    return (
      <div>
        <MyHeader myheadertitle={global.constants.const_app_txt2audio} />
        <WingBlank size="lg">
          <div key='bnt-1' style={{ display: 'inline-block' }}>
            <Button type="text" icon="setting" onClick={() => { this.handleClickDialog(); }}  >{global.constants.const_app_setting}</Button>
          </div>
        </WingBlank>
        <WingBlank size="lg">
          <TextareaItem
            {...getFieldProps('input_data')}
            ref="input_data"
            placeholder='请输入文本'
            autoHeight
            labelNumber={5}
            count={150}
            rows={9}
            title={global.constants.const_app_txt2audio_txt}
          />
        </WingBlank>
        <WhiteSpace />
        <WingBlank size="lg">
          <Button1 type="primary" onClick={() => { this.handleClickPlay(); }}>播放</Button1>
        </WingBlank>
        <div key='audio-1' style={{ display: const_displayconsole }}>
          <audio
            src={const_play_url}
            preload={"metadata"}
            controls
            id="audioplayer1"
            autoPlay={"autoplay"}
          />
        </div>
        <Txt2AudioDialogSettingContainers />
      </div>
    );
  }

  static propTypes = {
    dialogvisible: PropTypes.bool,
    dialogVisibleDataCreate: PropTypes.func,
    txt2audio_rate: PropTypes.number,
    txt2audio_voice: PropTypes.string,
    txt2audio_volume: PropTypes.number,
    txt2audio_voices: PropTypes.string,
    txt2audio_text: PropTypes.string,
    txt2audioTextCreate: PropTypes.func,
    display_console: PropTypes.string,
    displayConsoleCreate: PropTypes.func,
  }
}
const Txt2AudioWrapper = createForm()(Txt2Audio);
export default Txt2AudioWrapper;

