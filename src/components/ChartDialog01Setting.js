import React, { Component } from 'react';
import { Button,Input,Dialog,Form,Select,Switch,InputNumber} from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';


class ChartDialogSetting extends Component {

  constructor(props) {
      super(props);
      this.state = {
                    chart_label: props.chart_label||'dataset',
                    chart_label_position: props.chart_label_position||'top',
                    chart_label_enable: props.chart_label_enable||true,
                    chart_title: props.chart_title||'dataset',
                    chart_title_position: props.chart_title_position||'top',
                    chart_title_enable: props.chart_title_enable||true,
                    chart_xaxis: props.chart_xaxis||'x',
                    chart_xaxis_enable: props.chart_xaxis_enable||false,
                    chart_yaxis: props.chart_yaxis||'x',
                    chart_yaxis_enable: props.chart_yaxis_enable||false,
                    chart_window_width: props.chart_window_width||100,
                    chart_window_height: props.chart_window_height||70
                   };
  }

  handleClickDialogSubmit() {
      this.props.dialogVisibleDataCreate(false);
      var input_label = this.refs.input_label.props.value;
      if (input_label===undefined) {
          input_label="dataset";
      }
      this.props.chartLabelDataCreate(input_label);
      
      var input_title = this.refs.input_title.props.value;
      if (input_title===undefined) {
          input_title="dataset";
      }
      this.props.chartTitleDataCreate(input_title);

      var input_xaxis = this.refs.input_xaxis.props.value;
      console.log(input_xaxis);
      if (input_xaxis===undefined) {
          input_xaxis="x";
      }
      this.props.chartXaxisDataCreate(input_xaxis);

      var input_yaxis = this.refs.input_yaxis.props.value;
      if (input_yaxis===undefined) {
          input_yaxis="y";
      }
      this.props.chartYaxisDataCreate(input_yaxis);
 
  }

  handleClickDialogSelectChangeWindowWidth(e) {
      if (e===undefined||e.lenght<1) {
          this.props.chartWindowWidthDataCreate(100);
      }else{
          this.props.chartWindowWidthDataCreate(e);
      }
  }

  handleClickDialogSelectChangeWindowHeight(e) {
      if (e===undefined||e.lenght<1) {
          this.props.chartWindowHeightDataCreate(70);
      }else{
          this.props.chartWindowHeightDataCreate(e);
      }
  }
 
  handleClickDialogSelectChangeTitlePosition(e) {
      if (e===undefined) {
          this.props.chartTitlePositionDataCreate('top');
      }else{
          this.props.chartTitlePositionDataCreate(e);
      }
      
  }

  handleClickDialogSelectChangeLabelPostion(e) {
      if (e===undefined) {
          this.props.chartLabelPositionDataCreate('top');
      }else{
          this.props.chartLabelPositionDataCreate(e);
      }
  }

  handleClickDialogSelectChangeLabelEnable(e) {
      if (e===undefined) {
          this.props.chartLabelEnableDataCreate(true);
      }else{
          this.props.chartLabelEnableDataCreate(e);
      }
  }

  handleClickDialogSelectChangeTitleEnable(e) {
      if (e===undefined) {
          this.props.chartTitleEnableDataCreate(false);
      }else{
          this.props.chartTitleEnableDataCreate(e);
      }
  }
  
  handleClickDialogSelectChangeXaxisEnable(e) {
      if (e===undefined) {
          this.props.chartXaxisEnableDataCreate(false);
      }else{
          this.props.chartXaxisEnableDataCreate(e);
      }
  }
  
  handleClickDialogSelectChangeYaxisEnable(e) {
      if (e===undefined) {
          this.props.chartYaxisEnableDataCreate(false);
      }else{
          this.props.chartYaxisEnableDataCreate(e);
      }
  }

  render() {
    const { getFieldProps } = this.props.form;
    const dialogvisible = this.props.dialogvisible;
    const chart_label = this.props.chart_label;
    const chart_label_position = this.props.chart_label_position;
    const chart_label_enable = this.props.chart_label_enable;
    const chart_title = this.props.chart_title;
    const chart_title_position = this.props.chart_title_position;
    const chart_title_enable = this.props.chart_title_enable;
    const chart_xaxis = this.props.chart_xaxis;
    const chart_xaxis_enable = this.props.chart_xaxis_enable;
    const chart_yaxis = this.props.chart_yaxis;
    const chart_yaxis_enable = this.props.chart_yaxis_enable;
    const chart_window_width = this.props.chart_window_width;
    const chart_window_height = this.props.chart_window_height;
 
    const dialogSelectOptions = [{
      value: 'top',
      label: '顶部'
    }, {
      value: 'left',
      label: '左侧'
    }, {
      value: 'bottom',
      label: '底部'
    }, {
      value: 'right',
      label: '右侧'
    }];

    return (
        <div>
                  <Dialog
                    title={global.constants.const_app_chart_dialog_title}
                    visible={ dialogvisible }
                    size = "large"
                    onCancel={ () => {this.props.dialogVisibleDataCreate(false); } }
                  >
                      <Dialog.Body>
                          <Form >
                              <Form.Item label={global.constants.const_label} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Input {...getFieldProps('input_label')}
                                      placeholder={chart_label}
                                      ref = "input_label"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_label_position} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Select value={chart_label_position}  onChange ={(e) =>this.handleClickDialogSelectChangeLabelPostion(e)} >
                                       {
                                           dialogSelectOptions.map(el => {
                                               return (<Select.Option key={el.value} label={el.label} value={el.value} />);
                                           })
                                       }
                                  </Select>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_label_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch 
                                    value={chart_label_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogSelectChangeLabelEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width}>
                                  <Input {...getFieldProps('input_title')}
                                      placeholder={chart_title}
                                      ref = "input_title"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_title_position} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Select value={chart_title_position} onChange ={(e) =>this.handleClickDialogSelectChangeTitlePosition(e)} >
                                       {
                                           dialogSelectOptions.map(el => {
                                               return (<Select.Option key={el.value} label={el.label} value={el.value} />);
                                           })
                                       }
                                  </Select>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_title_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch
                                    value={chart_title_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogSelectChangeTitleEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_yaxis} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Input {...getFieldProps('input_yaxis')}
                                      placeholder={chart_yaxis}
                                      ref = "input_yaxis"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_yaxis_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch
                                    value={chart_yaxis_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogSelectChangeYaxisEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_xaxis} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Input {...getFieldProps('input_xaxis')}
                                      placeholder={chart_xaxis}
                                      ref = "input_xaxis"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_xaxis_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch
                                    value={chart_xaxis_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogSelectChangeXaxisEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_widow_width_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <InputNumber defaultValue={chart_window_width} onChange={ (e) =>this.handleClickDialogSelectChangeWindowWidth(e)  } ></InputNumber>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_widow_height_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <InputNumber defaultValue={chart_window_height} onChange={ (e) =>this.handleClickDialogSelectChangeWindowHeight(e)  } ></InputNumber>
                              </Form.Item>
                          </Form>
                      </Dialog.Body>

                      <Dialog.Footer className="dialog-footer">
                          <Button onClick={ () => { this.props.dialogVisibleDataCreate(false); } }>取 消</Button>
                          <Button type="primary" onClick={ () => { this.handleClickDialogSubmit(); } }>确 定</Button>
                      </Dialog.Footer>
                  </Dialog>
        </div>
    );
  }

  static propTypes = {
    dialogvisible: PropTypes.bool,
    dialogVisibleDataCreate: PropTypes.func,
    chart_label: PropTypes.string,
    chartLabelDataCreate: PropTypes.func,
    chart_label_position: PropTypes.string,
    chartLabelPositionDataCreate: PropTypes.func,
    chart_label_enable: PropTypes.bool,
    chartLabelEnableDataCreate: PropTypes.func,
    chart_title: PropTypes.string,
    chartTitleDataCreate: PropTypes.func,
    chart_title_position: PropTypes.string,
    chartTitlePositionDataCreate: PropTypes.func,
    chart_title_enable: PropTypes.bool,
    chartTitleEnableDataCreate: PropTypes.func,
    chart_xaxis: PropTypes.string,
    chartXaxisDataCreate: PropTypes.func,
    chart_xaxis_enable: PropTypes.bool,
    chartXaxisEnableDataCreate: PropTypes.func,
    chart_yaxis: PropTypes.string,
    chartYaxisDataCreate: PropTypes.func,
    chart_yaxis_enable: PropTypes.bool,
    chartYaxisEnableDataCreate: PropTypes.func,
    chart_window_width: PropTypes.number,
    chartWindowWidthDataCreate: PropTypes.func,
    chart_window_height: PropTypes.number,
    chartWindowHeightDataCreate: PropTypes.func,
  }
}
const ChartDialogSettingWrapper = createForm()(ChartDialogSetting);
export default ChartDialogSettingWrapper;
