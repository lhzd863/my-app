import React, { Component } from 'react';
import { List } from 'antd-mobile';
import {withRouter} from 'react-router-dom';
import "../config.js";

const Item = List.Item;
//const Brief = Item.Brief;


class AppHome extends Component {
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
      //this.props.history.push("/back");
      window.location.href = global.constants.const_url+"/login";
  }
  handleClickStatement () {
      window.location.href = global.constants.const_url+"/home/statement";
  }

  handleClickQrCode () {
      window.location.href = global.constants.const_url+"/home/qrcode";
  }
 
  handleClickRegister () {
      window.location.href = global.constants.const_url+"/home/register/tools";
  }

  render() {
    return (
    <div>
      <List className="nva-bar-title">
        <Item
          arrow="horizontal"
          thumb="http://122.51.161.53:8080/img/filezilla.png"
          multipleLine
          onClick={() => {this.handleClick();}}
        >
          {global.constants.const_home_username} {this.state.username} 
        </Item>

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

export default withRouter(AppHome);
