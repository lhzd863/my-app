import React, { Component } from 'react';
import { WingBlank, Button, List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import "../common/common.css";
import { createForm } from 'rc-form';
import '../dist/css/logo.less';

class Login extends Component {
  handleClick (e) {
      window.location.href = global.constants.const_url;
  }
  
  handleClickRegister (e) {
      window.location.href = global.constants.const_url+"/register";
  }

  handleClickLogin (e) {
    var input_username = this.refs.input_username.props.value;
    var input_password = this.refs.input_password.props.value;
      
    let data = [];
    fetch("http://122.51.161.53:9903/api/login",{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        username: input_username,
        password: input_password,
      })
     })
     .then(response => response.json())
     .then((dat) => {
         data=dat;
         //console.log(data);
         var comment = {accesstoken: data[0].accesstoken, username: input_username, userstatus: "online"};
         var cti = JSON.parse('[]');
         cti.unshift(comment);
         localStorage.removeItem('cti');
         localStorage.setItem('cti',JSON.stringify(cti));
         Toast.success(input_username+'login success !!!', 1);

         window.location.href = global.constants.const_url;
     })
     .catch(function (err) {
          Toast.fail('Login failed !!!', 1);
          console.log(err);
     });
     //console.log(data);
     //var comment = {accesstoken: data[0].accesstoken, username: input_username, userstatus: "login"};
     //var cti = JSON.parse('[]');
     //cti.unshift(comment);
     //localStorage.removeItem('cmts');
     //localStorage.setItem('cmts',JSON.stringify(cti));
     //window.location.href = global.constants.const_url;
  }

  handleClickCannce (e) {
      window.location.href = global.constants.const_url;
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
        <div className="login-page">
               <div className="logo-container">
                    <img src={require('../dist/img/logo.svg')} alt="logo"/>
                </div>
                <WingBlank>
                    <List>
                        <InputItem
                          {...getFieldProps('input_username')}
                          clear
                          placeholder="输入用户名"
                          ref = "input_username"
                        >
                          用户名
                        </InputItem>
                        <InputItem
                          {...getFieldProps('input_password')}
                          clear
                          type="password"
                          placeholder="输入密码"
                          ref = "input_password"
                        >
                          密码
                        </InputItem>
                    </List>
                    <WhiteSpace/>
                    <Button type="primary" onClick={() => {this.handleClickLogin();}} >{global.constants.const_login}</Button>
                    <WhiteSpace/>
                    <Button type="primary" onClick={() => {this.handleClickRegister();}} > {global.constants.const_register}</Button>
                </WingBlank>

        </div>
    );
  }
}

const LoginWrapper = createForm()(Login);
export default LoginWrapper;
