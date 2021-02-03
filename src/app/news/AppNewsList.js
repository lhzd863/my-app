import React, { Component } from 'react';
import { WingBlank, Steps, Toast, Tag } from 'antd-mobile';
import MyHeader from '../../components/MyHeader.js';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import './news.css';

const Step = Steps.Step;

function quickSort1(arr) {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0; i < arr.length - 1 - j; i++) {
      if (arr[i].cts < arr[i + 1].cts) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
};

class AppNewsList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: '',
      arrlst: [],
      display_page_step: 'none',
      down: true
    };
  }


  componentDidMount() {
    let accesstoken = '';
    if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
      JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
      accesstoken = global.constants.const_default_accesstoken;
    } else {
      accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
    }

    Toast.loading('Loading...', 0, () => {
      console.log('Load complete !!!');
    });
    const const_news_tag = this.props.news_tag;
    let url = global.constants.const_api_url + "/app/news/ls?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        tag: const_news_tag,
        amount: 0
      })
    })
      .then(response => response.json())
      .then((dat) => {
        this.setState({ data: dat });
        Toast.hide();
      })
      .catch(function (err) {
        console.log(err);
        Toast.hide();
      });
  }

  handleClickUrl(e) {
    window.location.href = e;
  }

  newsatt(e) {
    var ar = [];
    for (var i = 0; i < e.length; i++) {
      ar.push(e[i]);
    }
    var ar0 = quickSort1(ar);
    return ar0.map((v, k) => (
      <Step title={v.cts} key={k} icon={<i className="el-icon-time" style={{ color: '#20A0FF' }} > </i>} description={<div key={v.nid}>
        <div>
          <span className="news-header-text">{v.title}</span>
          <div className="news-body-text" > {(v.content).length > 68 ? (v.content).substr(0, 68) : v.content} <i className="el-icon-share" style={{ color: '#13CE66' }} onClick={() => { this.handleClickUrl(v.url); }}></i> </div>
          <div className="news-footer-line"><Tag small >来源:{v.src}</Tag> </div>
        </div>
      </div>}
      />
    ));
  }

  render() {
    const flst = this.state.data;
    const newstag = this.props.news_tag;
    return (
      <div>
        <MyHeader myheadertitle={newstag} preurl={'/app/news/tag'} />
        <WingBlank>
          <Steps size="small" current={flst.length}>
            {this.newsatt(flst)}
          </Steps>
        </WingBlank>
      </div>
    );
  }

  static propTypes = {
    news_tag: PropTypes.string,
    newsTagCreate: PropTypes.func,
  }

}
const AppNewsListWrapper = createForm()(AppNewsList);
export default AppNewsListWrapper;
