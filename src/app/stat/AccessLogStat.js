import React, { Component } from 'react';
import { WingBlank, WhiteSpace, Card, Flex } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';

class AccessLogStat extends Component {

    constructor(props) {
        super(props);
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        var dateStr = year + "-" + month + "-" + day;
        this.state = {
            total_num: props.total_num || 0,
            ip_num: props.ip_num || 0,
            cur_num: props.cur_num || 0,
            cur_ip_num: props.cur_ip_num || 0,
            stat_dt: props.stat_dt || dateStr
        };
    }

    handleData() {
        var stat_dt = this.state.stat_dt;
        if (stat_dt === undefined || stat_dt.length < 1) {
            var nowDate = new Date();
            var year = nowDate.getFullYear();
            var month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
            var day = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
            var dateStr = year + "-" + month + "-" + day;
            stat_dt = dateStr;
        }

        let accesstoken = '';
        if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
        }
        let url = global.constants.const_api_url + "/app/accesslog?accesstoken=" + accesstoken;
        fetch(url, {
            method: "Post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                dt: stat_dt
            })
        })
            .then(response => response.json())
            .then((dat) => {
                this.props.statDtCreate(stat_dt);
                this.props.statTotalNumCreate(dat[0].total_num);
                this.props.statCurNumCreate(dat[0].cur_num);
                this.props.statIpNumCreate(dat[0].ip_num);
                this.props.statCurIpNumCreate(dat[0].cur_ip_num);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    componentDidMount() {
        this.props.statTotalNumCreate(0);
        this.props.statCurNumCreate(0);
        this.props.statIpNumCreate(0);
        this.props.statCurIpNumCreate(0);
        this.props.statDtCreate(this.state.stat_dt);
        this.handleData();
    }

    render() {
        const const_dt = this.props.stat_dt;
        const const_total_num = this.props.stat_total_num;
        const const_cur_num = this.props.stat_cur_num;
        const const_ip_num = this.props.stat_ip_num;
        const const_cur_ip_num = this.props.stat_cur_ip_num;
        return (
            <div>
                <MyHeader myheadertitle={global.constants.const_app_stat_accesslog} />
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                    <Card>
                        <Card.Header
                            title="访问统计"
                            extra={<span>{const_dt}</span>}
                        />
                        <Card.Body>
                            <div className="flex-container">
                               <Flex>
                                  <Flex.Item>
                                     <Card> <Card.Header title="历史总访问数" /> <Card.Body> <span>{const_total_num}</span></Card.Body> </Card>
                                  </Flex.Item>
                               </Flex>
                               <WhiteSpace size="lg" />
                               <Flex>
                                  <Flex.Item>
                                     <Card> <Card.Header title="当天访问数" /> <Card.Body> <span>{const_cur_num}</span></Card.Body> </Card>
                                  </Flex.Item>
                               </Flex>
                               <WhiteSpace size="lg" />
                               <Flex>
                                  <Flex.Item>
                                     <Card> <Card.Header title="历史IP访问数" /> <Card.Body> <span>{const_ip_num}</span></Card.Body> </Card>
                                  </Flex.Item>
                               </Flex>
                               <WhiteSpace size="lg" />
                               <Flex>
                                  <Flex.Item>
                                     <Card> <Card.Header title="当天IP访问数" /> <Card.Body> <span>{const_cur_ip_num}</span></Card.Body> </Card>
                                  </Flex.Item>
                               </Flex>
                            </div>
                         </Card.Body>
                      </Card>
                </WingBlank>
            </div >
        );
    }
    static propTypes = {
        statTotalNumCreate: PropTypes.func,
        stat_total_num: PropTypes.number,
        statCurNumCreate: PropTypes.func,
        stat_cur_num: PropTypes.number,
        statIpNumCreate: PropTypes.func,
        stat_ip_num: PropTypes.number,
        statCurIpNumCreate: PropTypes.func,
        stat_cur_ip_num: PropTypes.number,
        statDtCreate: PropTypes.func,
        stat_dt: PropTypes.string,
    }
}

const AccessLogStatWrapper = createForm()(AccessLogStat);
export default AccessLogStatWrapper;

