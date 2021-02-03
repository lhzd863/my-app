import React, { Component } from 'react';
import { WingBlank,WhiteSpace,Modal,Flex} from 'antd-mobile';
import "../common/common.css";
import MyHeader from '../components/MyHeader.js';
import { Button,Table } from 'element-react';
import 'element-theme-default';
import PropTypes from 'prop-types';

const alert = Modal.alert;

class MyDownload extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
            columns: [
            {
              type: 'selection'
            },
            {
              label: "文件名",
              prop: "name"
            }],
            flst: props.flst || [{"name":"","size":"","url":"","isdir":""}]
        };
  }

  handleClickSelect (e) {
     if (e.length>0){
       for(let i=0;i<e.length;i++){
          const alertInstance = alert('URL', e[i].url, [
                   { text: global.constants.const_delete, onPress: () => {console.log('cancel'); this.handleClickDelete(e[i].name);}, style: 'default' },
                   { text: global.constants.const_ok, onPress: () => console.log('ok') },
                ]);
          setTimeout(() => {
             console.log('auto close');
             alertInstance.close();
            }, 500000);
       }
     }
     //console.log(e);
  }
  
  handleClickBack (e) {
      window.location.href = global.constants.const_url+"/my/download";
  }


  handleClickDelete (e) {
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          accesstoken = global.constants.const_default_accesstoken;
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
         this.handleClickBack();
      })
     .catch(function (err) {
            console.log(err);
     });
     console.log(e);
  }

  componentDidMount () {
    var data;
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem('cti') || '[]')[0]===undefined||
          JSON.parse(localStorage.getItem('cti') || '[]')[0].username===undefined){
          accesstoken = global.constants.const_default_accesstoken;
    }else{
          accesstoken = JSON.parse(localStorage.getItem('cti') || '[]')[0].accesstoken;
    }
    let url = global.constants.const_api_url + "/app/upload/filelist?accesstoken=" + accesstoken;

    fetch(url,{
      method: "Post",
      mode: "cors",
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
      })
     })
     .then(response => response.json())
     .then((dat) => {
         data=dat;
         //console.log(data[0])
         this.props.flstDataCreate(data);
       })
      .catch(function (err) {
         console.log(err);
       });
       
  }

  handleClickUpload (e) {
      window.location.href = global.constants.const_url+"/my/upload";
  }

  render() {
    const fdata = JSON.parse(JSON.stringify(this.props.flst));
    return (
        <div>
               <MyHeader myheadertitle={ global.constants.const_app_file_list } />
               <WingBlank size="lg">
                 <WhiteSpace size="lg" />
                 <Flex>
                      <Flex.Item>
                          <Button size="small" type="primary" onClick={() => {this.handleClickUpload();}} > { global.constants.const_upload}</Button>
                      </Flex.Item>
                 </Flex>
                 <WhiteSpace size="lg" />
                 <Table
                  style={{width: '100%'}}
                  columns={this.state.columns}
                  data= {fdata}
                  border={false}
                  height={250}
                  onSelectChange={(selection)=>{this.handleClickSelect(selection);}}
                  onSelectAll={(selection) => { console.log(selection); }}
                 />
               </WingBlank>
        </div>
    );
  }

  static propTypes = {
    flst: PropTypes.array,
    flstDataCreate: PropTypes.func
  }

}

export default MyDownload;
