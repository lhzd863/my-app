import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import "../common/common.css";

class MyHeader extends Component {
  
  constructor(props) {
        super(props);
        this.state = {
            myheadertitle: props.myheadertitle || '',stackarr: props.stackarr || [],preurl: ''
        };
  } 
  handleClick (e) {
      var tmp_url = this.props.preurl;
      if (tmp_url===undefined||tmp_url.length<1) {
         window.location.href = global.constants.const_url;
      }else{
         this.props.history.push(tmp_url);
      }
  }

  render() {
    const {myheadertitle} = this.props;
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
              >{myheadertitle}</NavBar>

        </div>
    );
  }
}
export default withRouter(MyHeader);

