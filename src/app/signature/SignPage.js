import React, { Component } from 'react';
import { WingBlank, WhiteSpace, Button ,Flex,ActionSheet,Toast} from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { Button as EButton,Upload,Message} from 'element-react';
import 'element-theme-default';
import SignatureCanvas from 'react-signature-canvas'

class SignPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.clear = this.clear.bind(this);
        this.trim = this.trim.bind(this);
    }

    sigCanvas = {clear:()=>{},toDataURL:(param)=>{return ""}};
    clear(){
        this.sigCanvas.clear();
    }
    trim(){
        console.log(this.sigCanvas);
        this.setState({trimmedDataURL: this.sigCanvas.toDataURL('image/png')})
    }

    handleData() {
        var const_image_filename = this.props.image_file_name;
        if (const_image_filename === undefined||const_image_filename ===null || const_image_filename.length < 1){
           console.log(const_image_filename+"image filename is null")
           return
        }
        var const_image_op = this.props.image_op;
        if (const_image_op === undefined||const_image_op === null || const_image_op.length < 1){
           alert("image op is null")
           console.log("image op is null")
           return
        }
        var const_image_background = this.props.image_background;
        if (const_image_background === undefined||const_image_background === null || const_image_background.length < 1){
           const_image_background = 'no'
        }

        let accesstoken = '';
        if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
        }
        var url = ''
        var apitype = const_image_op.split('-')[0]
        if(apitype === 'filter'){
          url = global.constants.const_api_url + "/app/image/filter?accesstoken=" + accesstoken;
        }else {
          url = global.constants.const_api_url + "/app/image/pic?accesstoken=" + accesstoken;
        }
        Toast.loading('Loading...', 0, () => {
           console.log('提交中!!!');
        });
        fetch(url, {
            method: "Post",
            mode: "cors",
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                filename: const_image_filename,op:const_image_op,picname:const_image_background
            })
        })
            .then(response => response.json())
            .then((dat) => {
              this.props.imageUrlCreate(dat[0].url);
              this.props.displayConsoleCreate('none');
              Toast.hide();
            })
            .catch(function (err) {
                console.log(err);
                Message(err);
                this.props.displayConsoleCreate('block');
                Toast.hide();
            });
    }

    componentDidMount() {
    }

    render() {
        let accesstoken = '';
        if (JSON.parse(localStorage.getItem('cti') || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem('cti') || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem('cti') || '[]')[0].accesstoken;
        }

        const displayconsole = this.props.display_console;       
        return (
            <div>
              <MyHeader myheadertitle={global.constants.const_app_image_edit} />
              <WhiteSpace size="lg" />
              <WingBlank size="lg">
                <div style={{border: '1px solid #eaeaea' }}>
                   <SignatureCanvas 
                    penColor='black' 
                    minWidth={0}
                    maxWidth={10}
                    canvasProps={{width: 400, height: 300, className: 'sigCanvas'}} 
                    ref={(ref) => { this.sigCanvas = ref }}
                   />                
                </div>
              </WingBlank>
            </div >
        );
    }
    static propTypes = {
        image_file_name: PropTypes.string,
        imageFileNameCreate: PropTypes.func,
        image_op: PropTypes.string,
        imageOpCreate: PropTypes.func,
        image_url: PropTypes.string,
        imageUrlCreate: PropTypes.func,
        image_background: PropTypes.string,
        imageBackgroundCreate: PropTypes.func,
        display_console: PropTypes.string,
        displayConsoleCreate: PropTypes.func,
    }
}

const SignPageWrapper = createForm()(SignPage);
export default SignPageWrapper;

