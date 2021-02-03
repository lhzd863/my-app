import React, { Component } from 'react';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile';
import "../common/common.css";
import "../config.js";
import PropTypes from 'prop-types';
import MyHeader from '../components/MyHeader.js';

class MyInfoPage extends Component {

  constructor(props) {
        super(props);
        this.state = {
            username: props.username || '',
            userid: props.userid || '',
            alias: props.alias || '',
            mail: props.mail || ''
        };
  }

  handleClick (e) {
      window.location.href = global.constants.const_url;
  }

  onChange = (val) => {
    console.log(val);
  }

  handleClickLogout (e) {
      localStorage.removeItem('cti');
      window.location.href = global.constants.const_url+"/";
  }

  handleClickMyFileList (e) {
      window.location.href = global.constants.const_url+"/my/download";
  }


  componentDidMount () {
    var data;
    let username = '';
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          username = 'tmp';
          accesstoken = global.constants.const_default_accesstoken;
    }else{
          username = JSON.parse(localStorage.getItem('cti') || '[]')[0].username;
          accesstoken = JSON.parse(localStorage.getItem('cti') || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/home/myinfo?accesstoken=" + accesstoken;
    fetch(url,{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        username: username,
      })
     })
     .then(response => response.json())
     .then((dat) => {
         data=dat;
         //console.log(data);
         this.props.updUserNameCreater(data[0].username);
         this.props.updUserIdCreater(data[0].userid);
         this.props.updAliasCreater(data[0].alias);
         this.props.updMailCreater(data[0].mail);
         //console.log(this.props.username);
     })
     .catch(function (err) {
         console.log(err);
     });
  }

  render() {
    const {username,userid,alias,mail} = this.props;
    return (
        <div>
              <MyHeader myheadertitle={global.constants.const_home_myinfo} />
              <List renderHeader={() => global.constants.const_home_myinfo }>
                  <InputItem
                      ref = "input_username"
                      value = {username}
                      editable={false}
                  >
                    { global.constants.const_home_register_my_username}
                  </InputItem>
                  <InputItem
                      ref = "input_alias"
                      value =  {alias}
                      editable={false}
                  >
                    { global.constants.const_alias}
                  </InputItem>
                  
                  <InputItem
                      ref = "input_userid"
                      value = {userid}
                      editable={false}
                  >
                    { global.constants.const_userid} 
                  </InputItem>
                  <InputItem
                      ref = "input_mail"
                      value =  {mail}
                      editable={false}
                  >
                    { global.constants.const_home_register_my_email}
                  </InputItem>
                  <WingBlank>
                      <WhiteSpace/>
                      <Button type="primary" onClick={() => {this.handleClickMyFileList();}} >{global.constants.const_app_file_list}</Button>
                      <WhiteSpace/>
                      <Button type="primary" onClick={() => {this.handleClickLogout();}} >{global.constants.const_logout}</Button>
                      <WhiteSpace/>
                  </WingBlank>
                  
             </List>
        </div>
    );
  }

  static propTypes = {
    username: PropTypes.string,
    updUserNameCreater: PropTypes.func,
    userid: PropTypes.string,
    updUserIdCreater: PropTypes.func,
    alias: PropTypes.string,
    updAliasCreater: PropTypes.func,
    mail: PropTypes.string,
    updMailCreater: PropTypes.func
  }

}

export default MyInfoPage;

