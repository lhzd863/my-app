import React, { Component } from 'react';
import { WingBlank,WhiteSpace,Tag,Card} from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { Button,Table,Rate,Icon } from 'element-react';
import 'element-theme-default';
import PropTypes from 'prop-types';


class MyTest extends Component {
  
  constructor(props) {
        super(props)
        this.state = {
            data: props.data || []
        }
  }

  
  handleClickBack (e) {
      window.location.href = global.constants.const_url+"/my/download";
  }


  componentDidMount () {
    var data;
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          accesstoken = global.constants.const_default_accesstoken
    }else{
          accesstoken = JSON.parse(localStorage.getItem('cti') || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/tool/list?accesstoken=" + accesstoken;
    console.log(url)
    fetch(url,{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        version: "v1.0.0"
      })
     })
     .then(response => response.json())
     .then((dat) => {
         data=dat;
         //console.log(data[0])
         this.props.arrayDataCreate(data);
       })
      .catch(function (err) {
         console.log(err);
       });
       
  }

  handleClickUpload (e) {
      window.location.href = global.constants.const_url+"/my/upload";
  }
  
  handleClickDelete (e) {
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          accesstoken = global.constants.const_default_accesstoken
    }else{
          accesstoken = JSON.parse(localStorage.getItem('cti') || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/app/upload/filedelete?accesstoken=" + accesstoken;
    fetch(url,{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
         name: e
      })
     })
     .then(response => response.json())
     .then((dat) => {
         console.log(dat);
         //this.handleClickBack();
      })
     .catch(function (err) {
            console.log(err);
     });
  }

  retatt (e) {
     const arr = [];
     for (var i=0;i<e.length;i++){
         arr.push(e[i])
     }
     return arr.map((v,k)=>(
       <div key={i}>
            <WhiteSpace />
            <Card>
                <Card.Header
                   title={v.toolsname}
                   extra=<Rate disabled={true} value={v.stars} showText={true} />
                />
                <Card.Body>
                   <div>{v.des}</div>
                   </Card.Body>
                <Card.Footer content=<div><a>{v.accesscnt} 次访问</a> <Tag selected>{v.tag}</Tag> </div> extra=<Button type="primary" size="mini" icon="more"></Button> />
            </Card>
       </div>
     ))
  }

  render() {
    const flst = this.props.data;
    return (
        <div>
               <MyHeader myheadertitle={ global.constants.const_app_file_list } />
               <WhiteSpace size="lg" />
               <div>{this.retatt(flst)}</div>
        </div>
    );
  }

  static propTypes = {
    data: PropTypes.array,
    arrayDataCreate: PropTypes.func
  }

}

export default MyTest;
