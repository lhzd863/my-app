import React, { Component } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import Upload from 'rc-upload';

class VideoReplaceBackground extends Component {

    constructor(props) {
        super(props);
        this.state = {
            facedraw_filename: props.facedraw_filename || '',
            facedraw_url: props.facedraw_url || ''
        };
        this.props.displayConsoleCreate('none');
    }

    handleClickUpload(e) {
        window.location.href = global.constants.const_url;
    }

    handlePreview(file) {
        console.log('preview');
    }

    handleRemove(file, fileList) {
        console.log('remove');
    }

    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 200;
        this.setState({ facedraw_filename: file.name })
        this.props.displayConsoleCreate('block');
        if (!isLt2M) {
            Message('上传大小不能超过 200MB!');
        }
        return isLt2M;
    }

    handleClickDialog() {
        this.props.dialogVisibleDataCreate(true);
    }

    handleData() {
        var facedraw_filename = this.state.facedraw_filename;
        if (facedraw_filename === undefined || facedraw_filename.length < 1) {
            facedraw_filename = '';
        }

        let accesstoken = '';
        if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
        }
        this.props.displayConsoleCreate('none');
        let url = global.constants.const_api_url + "/app/face/draw1?accesstoken=" + accesstoken;
        fetch(url, {
            method: "Post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                filename: facedraw_filename
            })
        })
            .then(response => response.json())
            .then((dat) => {
                this.setState({ txt2audio_url: dat[0].url, displayconsole: 'none' });
                this.props.displayConsoleCreate('block');
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        let accesstoken = '';
        if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
        }
        this.props.displayConsoleCreate('none');
        let url = global.constants.const_api_url + "/app/face/draw1?accesstoken=" + accesstoken;
        const props = {
           action: () => {
             return new Promise(resolve => {
                setTimeout(() => {
                   resolve(url);
                }, 2000);
             });
           },
           multiple: true,
           onStart(file) {
               console.log('onStart', file, file.name);
           },
           onSuccess(ret) {
               console.log('onSuccess', ret);
           },
           onError(err) {
               console.log('onError', err);
           },
         };

        return (
            <div>
                <MyHeader myheadertitle={global.constants.const_app_face_draw_title} />
                <WingBlank size="lg">
                    <div key='bnt-1' style={{ display: 'inline-block' }}>
                        <Button type="text" icon="setting" onClick={() => { this.handleClickDialog(); }}  >{global.constants.const_app_setting}</Button>
                    </div>
                </WingBlank>
                <WingBlank size="lg">
                    <WhiteSpace size="lg" />
                    <div>
                        <Upload {...props}>
                           <a>开始上传</a>
                        </Upload>
                    </div>
                    <WhiteSpace size="lg" />
                    <div key='img-1' style={{ display: const_displayconsole }}>
                        <img src={const_facedraw_filename} style={{ width: '300px', height: '300px' }} alt="" />
                    </div>
                </WingBlank>
            </div >
        );
    }
    static propTypes = {
        dialogvisible: PropTypes.bool,
        dialogVisibleDataCreate: PropTypes.func,
        display_console: PropTypes.string,
        displayConsoleCreate: PropTypes.func,
    }
}

const VideoReplaceBackgroundWrapper = createForm()(VideoReplaceBackground);
export default VideoReplaceBackgroundWrapper;

