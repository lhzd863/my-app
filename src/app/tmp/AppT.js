import React, { Component } from 'react';
import { WingBlank, WhiteSpace,TextareaItem } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { Button,Upload,Message,Dialog,Form,Input,Select} from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';


function showPosition(position)
  {
   console.log("->"+position.coords.latitude);
   console.log(position.coords.longitude);
  }
class AppT extends Component {

  constructor(props) {
      super(props);
      this.state = {xaxis: props.xaxis||['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    yaxis: props.yaxis||[65, 59, 80, 81, 56, 55, 40],
                    edata: props.edata||[],
                    ctitle: props.ctitle||''
                   };
  }

  handleRemove(file, fileList) {
      console.log('remove');
  }

  componentDidMount(){
   if (navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
    }else{
       console.log('Geolocation is not supported by this browser.');
    }
  }

  render() {
    const { getFieldProps } = this.props.form;
    if (navigator.geolocation){
       navigator.geolocation.getCurrentPosition(showPosition);
    }else{
       console.log('Geolocation is not supported by this browser.');
    }
   
    return (
        <div>
              <MyHeader myheadertitle={ global.constants.const_app_qrcode_decode_title } />
              <audio src="" preload="metadata" controls />
        </div>
    );
  }

}
const AppTWrapper = createForm()(AppT);
export default AppTWrapper;
