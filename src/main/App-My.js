import React, { Component } from 'react';
import { List,WhiteSpace,Card,Icon } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import "../config.js";
import "./App-My.css";

const Item = List.Item;


class AppMy extends Component {
  constructor(props) {
      let username = global.constants.const_default_username;
      if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          username = 'tmp';
      }else{
          username = JSON.parse(localStorage.getItem('cti') || '[]')[0].username;
      }
      super(props);
      this.state = {username: username};
  }
  handleClick (e) {
      if ( this.state.username === "tmp") {
         window.location.href = global.constants.const_url+"/login";
      }else {
         window.location.href = global.constants.const_url+"/myinfo";
      }
  }
  handleClickStatement () {
      window.location.href = global.constants.const_url+"/statement";
  }

  handleClickQrCode () {
      window.location.href = global.constants.const_url+"/my/qrcode";
  }
 
  handleClickRegister () {
      window.location.href = global.constants.const_url+"/tools/register";
  }

  render() {
    return (
    <div>
      <Card full={true}>
          <Card.Body>
              <div>
              <img className="img-info" src="http://106.75.249.244:9000/my-app/images/avatar.png" style={{width:'60px',height:'60px'}} alt={global.constants.const_home_username}/>
              <div className="div-info"> {global.constants.const_home_username}  {this.state.username}</div>
              </div>
          </Card.Body>
          <Card.Footer content="" extra={<Icon type="right" onClick={() => {this.handleClick();}} />} />
      </Card>
      <WhiteSpace/>
      <List className="nva-bar-title">
        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {this.handleClickQrCode();}}
          platform="android"
        >
           { global.constants.const_home_qrcode_name }
        </Item>

        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {this.handleClickRegister();}}
          platform="android"
        >
           { global.constants.const_home_register_tool_name }
        </Item>

        <Item
          arrow="horizontal"
          multipleLine
          onClick={() => {this.handleClickStatement();}}
          platform="android"
        >
           { global.constants.const_home_statement_name }
        </Item>
      </List>
    </div>

    );
  }
}

export default withRouter(AppMy);
