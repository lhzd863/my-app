import React, { Component } from 'react';
import "../common/common.css";
import statementMd from "../dist/md/myStatement.md";
import ReactMarkdown from 'react-markdown';
import "../config.js";
import MyHeader from '../components/MyHeader.js';

class MyStatement extends Component {
  handleClick (e) {
      window.location.href = global.constants.const_url;
  }

  render() {
    return (
        <div>
             <MyHeader myheadertitle={ global.constants.const_home_statement_name } />
             <ReactMarkdown
               source={statementMd}
               escapeHtml={false}
             />
        </div>
    );
  }
}

export default MyStatement;
