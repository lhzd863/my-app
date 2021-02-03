import React, { Component } from 'react';
import { WingBlank, Toast, WhiteSpace, NoticeBar } from 'antd-mobile';
import MyHeader from '../../components/MyHeader.js';
import { Layout } from 'element-react';
import 'element-theme-default';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import './news.css';

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
}

class AppNews extends Component {

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
    let url = global.constants.const_api_url + "/app/news/tag/ls?accesstoken=" + accesstoken;
    fetch(url, {
      method: "Post",
      mode: "cors",
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        tag: ""
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
    this.props.newsTagCreate(e);
    this.props.history.push('/app/news/ls');
  }

  newsatt(e) {
    var ar = [];
    for (var i = 0; i < e.length; i++) {
      ar.push(e[i]);
    }
    var ar0 = quickSort1(ar);
    return ar0.map((v, k) => (
      <div key={k} onClick={() => { this.handleClickUrl(v.tag); }} >
        <WhiteSpace size="lg" />
        <Layout.Row key={k}>
          <Layout.Col span={6} offset={0}>
            <img className="news-tag-img"
              src={v.img}
              alt={global.constants.const_home_username}
            />
          </Layout.Col>
          <Layout.Col span={18} offset={0}>
            <div className="news-tag-text-header"> {v.tag} </div>
            <div className="news-tag-text-body"> {v.content} </div>
            {(k < ar0.length - 1) ? <div className="news-tag-text-line"></div> : ""}
          </Layout.Col>
        </Layout.Row>
      </div>
    ));
  }

  render() {
    const flst = this.state.data;
    return (
      <div>
        <MyHeader myheadertitle={'资讯'} />
        <WingBlank>
          <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
            Notice: 资讯
                  </NoticeBar>
          {this.newsatt(flst)}
          <WhiteSpace size="lg" />
        </WingBlank>
      </div>
    );
  }

  static propTypes = {
    news_tag: PropTypes.string,
    newsTagCreate: PropTypes.func,
  }

}
const AppNewsWrapper = createForm()(AppNews);
export default AppNewsWrapper;
