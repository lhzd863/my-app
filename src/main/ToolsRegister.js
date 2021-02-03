import React, { Component } from 'react';
import { List, InputItem, TextareaItem, Checkbox, Button, WingBlank, Toast } from 'antd-mobile';
import "../common/common.css";
import { createForm } from 'rc-form';
import  HomeRegisterCheckBoxMap from "../common/AppCommon.js";
import MyHeader from "../components/MyHeader.js";

const CheckboxItem = Checkbox.CheckboxItem;

class ToolsRegister extends Component {
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
    var input_title = this.refs.input_title.props.value;
    var input_des = this.refs.input_des.props.value;
    var input_url = this.refs.input_url.props.value;
    var input_version = this.refs.input_version.props.value;
    var input_logo= this.refs.input_logo.props.value;
    var input_tag="";
    var obj = document.getElementsByName("mobilcheckbox");
    var k;
    var i=0;
    for(k in obj) {
       if(obj[k].checked){
           if ( i===0){
             input_tag+=HomeRegisterCheckBoxMap(k);
           }else{
             input_tag+="-"+HomeRegisterCheckBoxMap(k);
           }
           i++;
       }
    }
    
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username===undefined){
          accesstoken = global.constants.const_default_accesstoken;
    }else{
          accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/tool/add?accesstoken=" + accesstoken;
    fetch(url,{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        version: input_version,
        toolsname: input_title,
        img: input_logo,
        url: input_url,
        des: input_des,
        tag: input_tag,
        cdt: "2019-12-10",
        urlicon: "ellipsis",
        stars: 1,
        accesscnt: "0",
      })
     })
     .then(response => response.json())
     .then((dat) => {
         // data=dat;
         Toast.success('Submit success !!!', 1);
     })
     .catch(function (err) {
          console.log(err);
     });
     
     //
     //window.location.href = global.constants.const_url;
  }

  render() {
    const { getFieldProps } = this.props.form;
    const tagdata = [
            { value: 0, label: global.constants.const_home_register_tool_tag_safe },
            { value: 1, label: global.constants.const_home_register_tool_tag_video },
            { value: 2, label: global.constants.const_home_register_tool_tag_data },
            { value: 3, label: global.constants.const_home_register_tool_tag_audio },
            { value: 4, label: global.constants.const_home_register_tool_tag_image }
    ];

    return (
        <div>
              <MyHeader myheadertitle={ global.constants.const_home_register_tool_name } />
              <List renderHeader={() => global.constants.const_home_register_tool_title_des }>
                  <InputItem
                      {...getFieldProps('input_title')}
                      placeholder="title can be text"
                      ref = "input_title"
                  >
                    { global.constants.const_home_register_tool_title}
                  </InputItem>

                  <TextareaItem
                      {...getFieldProps('input_des')}
                      ref = "input_des"
                      title={global.constants.const_home_register_tool_des}
                      autoHeight
                      labelNumber={5}
                  />
                  
                  <InputItem
                      {...getFieldProps('input_url')}
                      ref = "input_url"
                      placeholder="tools url path"
                  >
                    { global.constants.const_home_register_tool_url} 
                  </InputItem>
                  <InputItem
                      {...getFieldProps('input_version')}
                      ref = "input_version"
                      placeholder="tools version format v1.0.0"
                  >
                    { global.constants.const_home_register_tool_version}
                  </InputItem>
                  <InputItem
                      placeholder="logo url"
                      {...getFieldProps('input_logo')}
                      ref = "input_logo"
                  >
                    { global.constants.const_home_register_tool_logo}
                  </InputItem>
                  
                  <div style={{ width: '100%', color: '#000000', textAlign: 'left', fontSize: 24 }} > { global.constants.const_home_register_tool_tag} </div>
                  {tagdata.map(i => (
                      <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)} name="mobilcheckbox" value={i.value} >
                      {i.label}
                      </CheckboxItem>
                  ))}
                  <WingBlank>
                     <Button type="primary" onClick={() => {this.handleSubmit();}}>{ global.constants.const_home_register_tool_submit }</Button>
                  </WingBlank>
             </List>
        </div>
    );
  }
}

const ToolsRegisterWrapper = createForm()(ToolsRegister);
export default ToolsRegisterWrapper;

