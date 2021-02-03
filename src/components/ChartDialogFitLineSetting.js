import React, { Component } from 'react';
import { Button,Input,Dialog,Form,Switch,InputNumber} from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import IsNumberFunc from "../common/IsNumberFunc.js";


class ChartDialogFitLineSetting extends Component {

  constructor(props) {
      super(props);
      this.state = {
                    chart_title: props.chart_title||'dataset',
                    chart_title_position: props.chart_title_position||'top',
                    chart_title_enable: props.chart_title_enable||true,
                    chart_window_img_width: props.chart_window_img_width||100,
                    chart_window_img_height: props.chart_window_img_height||70,
                    chart_leastsq_console_express_enable: props.chart_leastsq_console_express_enable||false,
                    chart_leastsq_real_value: props.chart_leastsq_real_value||'',
                    chart_leastsq_real_value_result_enable: props.chart_leastsq_real_value_result_enable||false,
                    chart_fitline_optimized_time: props.chart_fitline_optimized_time||'20001',
                    chart_fitline_loss_value: props.chart_fitline_loss_value||'0.00001'
                   };
  }

  handleClickDialogSubmit() {
      this.props.dialogVisibleDataCreate(false);
      
      var input_title = this.refs.input_title.props.value;
      if (input_title===undefined) {
          input_title="dataset";
      }
      this.props.chartTitleDataCreate(input_title);

      var input_optimized_time = this.refs.input_optimized_time.props.value;
      if (input_optimized_time===undefined||!IsNumberFunc(input_optimized_time.trim())) {
          input_optimized_time="20001";
      }
      this.props.chartFitLineOptimizedTimeCreate(input_optimized_time);

      var input_loss_value = this.refs.input_loss_value.props.value;
      if (input_loss_value===undefined||!IsNumberFunc(input_loss_value.trim())) {
          input_loss_value="0.00001";
      }
      this.props.chartFitLineLossValueCreate(input_loss_value);
 
  }

  handleClickDialogSelectChangeWindowImgWidth(e) {
      if (e===undefined||e.lenght<1) {
          this.props.chartWindowImgWidthDataCreate(100);
      }else{
          this.props.chartWindowImgWidthDataCreate(e);
      }
  }

  handleClickDialogSelectChangeWindowImgHeight(e) {
      if (e===undefined||e.lenght<1) {
          this.props.chartWindowImgHeightDataCreate(70);
      }else{
          this.props.chartWindowImgHeightDataCreate(e);
      }
  }
 
  handleClickDialogConsoleExpressEnable(e) {
      if (e===undefined) {
          this.props.chartLeastsqConsoleExpressEnableDataCreate(false);
      }else{
          this.props.chartLeastsqConsoleExpressEnableDataCreate(e);
      }
  }

  handleClickDialogRealValueResultEnable(e){
      if (e===undefined) {
          this.props.chartLeastsqRealValueResultEnableDataCreate(false);
      }else{
          this.props.chartLeastsqRealValueResultEnableDataCreate(e);
      }
  }

  render() {
    const { getFieldProps } = this.props.form;
    const dialogvisible = this.props.dialogvisible;
    const chart_title = this.props.chart_title;
    const chart_window_img_width = this.props.chart_window_img_width;
    const chart_window_img_height = this.props.chart_window_img_height;
    const chart_leastsq_console_express_enable = this.props.chart_leastsq_console_express_enable;
    const chart_leastsq_real_value_result_enable = this.props.chart_leastsq_real_value_result_enable;
    const chart_fitline_optimized_time = this.props.chart_fitline_optimized_time;
    const chart_fitline_loss_value = this.props.chart_fitline_loss_value;    

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
                              <Form.Item label={global.constants.const_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width}>
                                  <Input {...getFieldProps('input_title')}
                                      placeholder={chart_title}
                                      ref = "input_title"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_fitline_optimized_time} labelWidth={global.constants.const_app_chart_dialog_label_title_width}>
                                  <Input {...getFieldProps('input_optimized_time')}
                                      placeholder={chart_fitline_optimized_time}
                                      ref = "input_optimized_time"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_fitline_loss_value} labelWidth={global.constants.const_app_chart_dialog_label_title_width}>
                                  <Input {...getFieldProps('input_loss_value')}
                                      placeholder={chart_fitline_loss_value}
                                      ref = "input_loss_value"
                                  />
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_console_express_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch
                                    value={chart_leastsq_console_express_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogConsoleExpressEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_console_real_value_enable} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <Switch
                                    value={chart_leastsq_real_value_result_enable}
                                    onText={global.constants.const_on}
                                    offText={global.constants.const_off}
                                    onChange ={(e) =>this.handleClickDialogRealValueResultEnable(e)}
                                  >
                                  </Switch>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_widow_width_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <InputNumber defaultValue={chart_window_img_width} onChange={ (e) =>this.handleClickDialogSelectChangeWindowImgWidth(e)  } ></InputNumber>
                              </Form.Item>
                              <Form.Item label={global.constants.const_app_chart_dialog_widow_height_title} labelWidth={global.constants.const_app_chart_dialog_label_title_width} >
                                  <InputNumber defaultValue={chart_window_img_height} onChange={ (e) =>this.handleClickDialogSelectChangeWindowImgHeight(e)  } ></InputNumber>
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
    chart_title: PropTypes.string,
    chartTitleDataCreate: PropTypes.func,
    chart_window_img_width: PropTypes.number,
    chartWindowImgWidthDataCreate: PropTypes.func,
    chart_window_img_height: PropTypes.number,
    chartWindowImgHeightDataCreate: PropTypes.func,
    chart_leastsq_console_express_enable: PropTypes.bool,
    chartLeastsqConsoleExpressEnableDataCreate: PropTypes.func,
    chart_leastsq_real_value: PropTypes.string,
    chartLeastsqRealValueDataCreate: PropTypes.func,
    chart_leastsq_real_value_result_enable: PropTypes.bool,
    chartLeastsqRealValueResultEnableDataCreate: PropTypes.func,
    chart_fitline_optimized_time: PropTypes.string,
    chartFitLineOptimizedTimeCreate: PropTypes.func,
    chart_fitline_loss_value: PropTypes.string,
    chartFitLineLossValueCreate: PropTypes.func,
  }
}
const ChartDialogFitLineSettingWrapper = createForm()(ChartDialogFitLineSetting);
export default ChartDialogFitLineSettingWrapper;
