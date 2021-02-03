import React, { Component } from 'react';
import { WhiteSpace,Tag,Card,InputItem} from 'antd-mobile';
import { Button,Rate } from 'element-react';
import 'element-theme-default';
import PropTypes from 'prop-types';
import "./common.css";


class MyToolList extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
            data: props.data || []
        };
  }

  
  handleClickUrl (e) {
      window.location.href = e;
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
    let url = global.constants.const_api_url + "/tool/list?accesstoken=" + accesstoken;
    //console.log(url)
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
  
  retatt (e) {
     const arr = [];
     for (var i=0;i<e.length;i++){
         arr.push(e[i]);
     }
     return arr.map((v,k)=>(
       <div key={k}>
            <WhiteSpace />
            <Card>
                <Card.Header
                   title={v.toolsname}
                   extra=<Rate disabled={true} value={Number(v.stars)} showText={false} />
                />
                <Card.Body>
                   <img className="list-card-img" src={v.img} alt="" />
                   <div className="list-card-text" >{v.des}</div>
                   </Card.Body>
                <Card.Footer 
                    content=<div>  <Tag small >{v.tag}</Tag> </div> 
                    extra=<Button type="primary" size="mini" icon="more" onClick={() => {this.handleClickUrl(v.url);}}></Button> />
            </Card>
       </div>
     ));
  }

  render() {
    const flst = this.props.data;
    return (
        <div key="k998">
          <InputItem clear editable={false}>工具</InputItem>
          <div key="k999">{this.retatt(flst)}</div>
        </div>
    );
  }

  static propTypes = {
    data: PropTypes.array,
    arrayDataCreate: PropTypes.func
  }

}

export default MyToolList;
