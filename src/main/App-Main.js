import React from 'react';
import { TabBar  } from 'antd-mobile';
import "../common/common.css";
import AppGride from "./App-Gride.js";
import AppMy from "./App-My.js";
import "../config";
import MyToolListContainers from "../redux/containers/MyToolListContainers.js";


class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'yellowTab',
      hidden: false,
      fullScreen: true,
    };
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://106.75.249.244:9000/my-app/images/aya-0.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://106.75.249.244:9000/my-app/images/aya.png) center center /  21px 21px no-repeat' }}
              />
            }
            title={global.constants.const_main}
            key={global.constants.const_main}
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <AppGride />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'http://106.75.249.244:9000/my-app/images/yu-0.png' }}
            selectedIcon={{ uri: 'http://106.75.249.244:9000/my-app/images/yu.png' }}
            title={global.constants.const_tools}
            key={global.constants.const_tools}
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <MyToolListContainers />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://106.75.249.244:9000/my-app/images/acct-0.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(http://106.75.249.244:9000/my-app/images/acct.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title={global.constants.const_home}
            key={global.constants.const_home}
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
             <AppMy />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}

export default AppMain;
