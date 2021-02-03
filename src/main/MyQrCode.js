import React, { Component } from 'react';
import "../common/common.css";
import QRCode from 'qrcode.react';
import MyHeader from '../components/MyHeader.js';

class MyQrCode extends Component {
  handleClick (e) {
      window.location.href = global.constants.const_url;
  }

  render() {
    return (
        <div>
              <MyHeader myheadertitle={ global.constants.const_home_qrcode_name } />
              <div className="am-div home-qrcode-pos">
                  <QRCode value={ global.constants.const_url } 
                          size={200}
                          fgColor="#000000"
                          level="M"
                  />
              </div>
        </div>
    );
  }
}

export default MyQrCode;
