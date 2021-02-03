import React, { Component } from 'react';
import { List, InputItem, Button, WingBlank } from 'antd-mobile';
import "../common/common.css";
import { createForm } from 'rc-form';
import MyHeader from '../components/MyHeader.js';

class MyRegister extends Component {
  handleClick (e) {
      window.location.href = global.constants.const_url;
  }

  onChange = (val) => {
    console.log(val);
  }

  handleChangeTitle(event) {
    console.log(event);
  }
  
  handleSubmit() {
    var input_username = this.refs.input_username.props.value;
    var input_alias = this.refs.input_alias.props.value;
    var input_password = this.refs.input_password.props.value;
    var input_email = this.refs.input_email.props.value;

    var data;
    fetch("http://122.51.161.53:9903/api/register",{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        username: input_username,
        alias: input_alias,
        password: input_password,
        mail: input_email,
      })
     })
     .then(response => response.json())
     .then((dat) => {
         data=dat;
         var comment = {accesstoken: data.accesstoken, username: data.username};
         var cti = JSON.parse('[]');
         cti.unshift(comment);
         localStorage.removeItem('cti');
         localStorage.setItem('cti',JSON.stringify(cti));
         //window.location.href = global.constants.const_url;
     })
     .catch(function (err) {
          console.log(err);
     });
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
        <div>
              <MyHeader myheadertitle={global.constants.const_home_register} />
              <List renderHeader={() => global.constants.const_home_register_title }>
                  <InputItem
                      {...getFieldProps('input_username')}
                      placeholder="user name"
                      ref = "input_username"
                  >
                    { global.constants.const_home_register_my_username}
                  </InputItem>

                  <InputItem
                      {...getFieldProps('input_alias')}
                      ref = "input_alias"
                      placeholder="alias"
                  >
                    { global.constants.const_home_register_my_alias}
                  </InputItem>
                  
                  <InputItem
                      {...getFieldProps('input_password')}
                      ref = "input_password"
                      placeholder="password"
                  >
                    { global.constants.const_home_register_my_password} 
                  </InputItem>
                  <InputItem
                      {...getFieldProps('input_email')}
                      ref = "input_email"
                      placeholder="email"
                  >
                    { global.constants.const_home_register_my_email}
                  </InputItem>
                  
                  <WingBlank>
                     <Button type="primary" onClick={() => {this.handleSubmit();}}>{ global.constants.const_submit }</Button>
                  </WingBlank>
             </List>
        </div>
    );
  }
}

const MyRegisterWrapper = createForm()(MyRegister);
export default MyRegisterWrapper;

