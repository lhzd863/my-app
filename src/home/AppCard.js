import React, { Component } from 'react';
import { NavBar, Icon, Toast, Card, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import "../common/common.css";
import QrCode from "qrcode-reader";
//import fs from "fs";
//import Jimp from "jimp";


class AppQrCard extends Component {
  constructor(props) {
     super(props);
     this.state = {cardval: ''};
     this.handlefunc = this.handlefunc.bind(this);
  }
  handleClick (e) {
      window.location.href = global.constants.const_url;
  }

  handlerImg() {
     var Img = new Image();
     Img.src="http://122.51.161.53:8080/img/myinfo.JPG";
     Img.onload=function(){
       var canvas = document.createElement("canvas"),
       width=Img.width,
       height=Img.height;
       canvas.width=width;
       canvas.height=height;
       var context = canvas.getContext("2d");
       var data = context.getImageData(0, 0, width, height);
       var qr = new QrCode();
       qr.callback = function(error, result) {
          if(error) {
             console.log(error)
             return;
          }
          console.log(result)
       }
       qr.decode(data);
     };

  }
  
  
  componentDidMount() {
     this.handlefunc();
  }

  handlefunc() {
    var newfile = document.getElementById('newfile');
    var getObjectURL = function (file) {
        var url = null;
        if (window.createObjectURL !== undefined) {
          url = window.createObjectURL(file);
        } else if (window.URL !== undefined) {
        url = window.URL.createObjectURL(file);
        } else if (window.webkitURL !== undefined) {
          url = window.webkitURL.createObjectURL(file);
        }
        return url;
    }

    newfile.onchange = function () {
       var qr = new QrCode();
        //console.log(getObjectURL(this.files[0]));
        //qr.decode(getObjectURL(this.files[0]));
        //qr.callback = function (imgMsg) {
        //    alert("二维码解析：" + imgMsg)
        //}
       qr.callback = function(error, obj) {
          if(error) {
             console.log(error)
             Toast.fail('Image QrCode parse failed !!!', 1);
             return;
          }
          console.log(obj.result)
          //alert(obj.result)
          //this.setState({cardval: obj.result});
          Toast.info(obj.result , 2, null, false);
       }
       qr.decode(getObjectURL(this.files[0]));
    }    

  }
  render() {
    return (
        <div>
            <NavBar
                mode="light"
                icon={<Icon type="left" />}
                onLeftClick={() => {this.handleClick();}}
                rightContent={[
                  <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  <Icon key="1" type="ellipsis" />,
                ]}
              >个人信息</NavBar>
              <input type="file" id="newfile"  />         
              <WhiteSpace/>
              <Button type="primary" onClick={() => {this.handlefunc();}} >{global.constants.const_login}</Button>
              <WhiteSpace/>
              <WingBlank size="lg">
                  <WhiteSpace size="lg" />
                  <Card>
                     <Card.Header
                         title="This is title"
                         thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
                         extra={<span>this is extra</span>}
                     />
                     <Card.Body>
                         <div>{this.state.cardval}</div>
                     </Card.Body>
                     <Card.Footer content="footer content" extra={<div>extra footer content</div>} />
                  </Card>
                  <WhiteSpace size="lg" />
              </WingBlank>
        </div>
    );
  }
}

export default AppCard;
