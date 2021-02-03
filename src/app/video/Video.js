import React, { Component,Fragment } from 'react';
import { WingBlank, WhiteSpace, Button ,Flex,ActionSheet,Toast} from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { Button as EButton,Upload,Message} from 'element-react';
import 'element-theme-default';
import "../../../node_modules/video-react/dist/video-react.css";
import { 
 Player 
,ControlBar
,PlayToggle // PlayToggle 播放/暂停按钮 若需禁止加 disabled
,ReplayControl // 后退按钮
,ForwardControl  // 前进按钮
,CurrentTimeDisplay
,TimeDivider
,PlaybackRateMenuButton  //倍速播放选项
,VolumeMenuButton
} from 'video-react';

class Video extends Component {

    constructor(props) {
        super(props);
        this.state = {
            video_file_name: props.video_file_name || '',
            video_op: props.video_op || ''
        };
    }

    dataListFilter = [
      { url: 'aya', title: '素描',act: 'filter-sketch' },
      { url: 'aya', title: '彩色转黑白' ,act: 'filter-blackwithe'},
      { url: 'aya', title: '流年' ,act: 'filter-fleeting'},
      { url: 'aya', title: '旧电影' ,act: 'filter-oldfilm'},
      { url: 'aya', title: '反色',act: 'filter-reverse' },
      { url: 'aya', title: '模糊',act: 'filter-blur' },
      { url: 'aya', title: '轮廓滤波',act: 'filter-contour' },
      { url: 'aya', title: '浮雕滤波',act: 'filter-emboss' },
      { url: 'aya', title: '寻找边缘',act: 'filter-findedges' },
      { url: 'aya', title: '图像油漆',act: 'filter-emboss1' },
      { url: 'aya', title: '直方均衡化',act: 'filter-hist' },
    ].map(obj => ({
      icon: <img src={`http://106.75.249.244:9000/my-app/images/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      title: obj.title,
      act: obj.act
    }));

    dataListStage = [
      { url: 'aya', title: '中国元素840',act: 'stage-top-chn-840' },
      { url: 'aya', title: '中国元素003' ,act: 'stage-top-chn-003'},
      { url: 'aya', title: '中国元素006' ,act: 'stage-top-chn-006'},
      { url: 'aya', title: '中国元素128' ,act: 'stage-top-chn-128'},
      { url: 'aya', title: '中国元素230',act: 'stage-top-chn-230' },
    ].map(obj => ({
      icon: <img src={`http://106.75.249.244:9000/my-app/images/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      title: obj.title,
      act: obj.act
    }));

    handleVideoDowith(e){
       this.handleData()
    }

    handleVideoDownload(){
       window.location.href=this.props.video_url
    }

    handleVideoEdit(){
       this.props.displayConsoleCreate('block');
    }
    handleShowActionSheetFilter(){
       const data = [[...this.dataListFilter, this.dataListFilter[2]], [this.dataListFilter[3], this.dataListFilter[4]]];
         ActionSheet.showShareActionSheetWithOptions({
         options: data,
         message: '请选择',
       },
       (buttonIndex, rowIndex) => {
         this.props.videoOpCreate(buttonIndex > -1 ? data[rowIndex][buttonIndex].act:'no');
       });
    }

    handleShowActionSheetStage(){
       const data = [[...this.dataListStage ] ];
         ActionSheet.showShareActionSheetWithOptions({
         options: data,
         message: '请选择',
       },
       (buttonIndex, rowIndex) => {
         //this.setState({ clicked2: buttonIndex > -1 ? data[rowIndex][buttonIndex].title : 'cancel' });
         //console.log(data[rowIndex][buttonIndex].act)
         //console.log(data[rowIndex][buttonIndex].title)
         this.props.videoOpCreate(buttonIndex > -1 ? data[rowIndex][buttonIndex].act:'no');
       });
    }

    handleData() {
        var const_video_filename = this.props.video_file_name;
        if (const_video_filename === undefined||const_video_filename ===null || const_video_filename.length < 1){
           console.log(const_video_filename+"video filename is null")
           alert(const_video_filename+"video filename is null")
           return
        }
        var const_video_op = this.props.video_op;
        if (const_video_op === undefined||const_video_op === null || const_video_op.length < 1){
           alert("video op is null")
           console.log("video op is null")
           return
        }

        let accesstoken = '';
        if (JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0] === undefined ||
            JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].username === undefined) {
            accesstoken = global.constants.const_default_accesstoken;
        } else {
            accesstoken = JSON.parse(localStorage.getItem(global.constants.const_localstorage_id) || '[]')[0].accesstoken;
        }
        var url = ''
        var apitype = const_video_op.split('-')[0]
        if(apitype === 'filter'){
          url = global.constants.const_api_url + "/app/video/filter?accesstoken=" + accesstoken;
        }else {
          url = global.constants.const_api_url + "/app/video/pic?accesstoken=" + accesstoken;
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
                filename: const_video_filename,op:const_video_op
            })
        })
            .then(response => response.json())
            .then((dat) => {
              this.props.videoUrlCreate(dat[0].url);
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
       this.props.videoOpCreate('');
       this.props.videoUrlCreate('');
       this.props.displayConsoleCreate('block');
    }

    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 10;

        if (!isLt2M) {
            Message('上传大小不能超过 10MB!');
        }
        Toast.loading('Loading...', 0, () => {
           console.log('正在上传文件!!!');
        });
        return isLt2M;
    }

    handleAvatarSuccess(res, file) {
       this.props.videoFileNameCreate(res[0].filename);
       Toast.hide();
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
              <MyHeader myheadertitle={global.constants.const_app_video_edit} />
              <WhiteSpace size="lg" />
              <WingBlank size="lg">
                <div key='video-1' style={{ display: displayconsole==='none'?'none':'block' }}>
                  <div style={{ margin: 30,}} >
                    <div>
                       <Flex>
                           <Flex.Item>
                             <Upload
                               className="avatar-uploader"
                               showFileList={false}
                               action={global.constants.const_api_url + "/app/video/upload?accesstoken=" + accesstoken}
                               onPreview={file => this.handlePreview(file)}
                               onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                               beforeUpload={file => this.beforeAvatarUpload(file)}
                               onSuccess={(res,file) => this.handleAvatarSuccess(res,file)}
                             >
                               <EButton type="info" ><i className="el-icon-plus"></i></EButton>
                             </Upload>
                           </Flex.Item>
                           <Flex.Item>
                               <EButton type="info" onClick={() => {this.handleShowActionSheetFilter();}} >滤镜</EButton>
                           </Flex.Item>
                           <Flex.Item>
                               <EButton type="info" onClick={() => {this.handleShowActionSheetStage();}} >道具</EButton>
                           </Flex.Item>
                       </Flex>
                    </div>
                  </div>
                  <div><Button type="primary" onClick={(e) => {this.handleVideoDowith(e);}}>提交</Button></div>
                </div>
                <div key='video-2' style={{ display: displayconsole==='none'?'block':'none' }}>
                    <div style={{ width: 500, height: 300 }} >
                       <Fragment>
                       <Player videoId="video-1" autoPlay poster="https://video-react.js.org/assets/poster.png" src={this.props.video_url} >
                         <ControlBar autoHide={false} disableDefaultControls={false}>
                           <ReplayControl seconds={10} order={1.1} />
                           <ForwardControl seconds={30} order={1.2} />
                           <PlayToggle />
                           <CurrentTimeDisplay order={4.1} />
                           <TimeDivider order={4.2} />
                           <PlaybackRateMenuButton rates={[5, 2, 1.5, 1, 0.5]} order={7.1} />
                           <VolumeMenuButton />
                         </ControlBar>
                       </Player>
                       </Fragment>
                    </div>
                    <WhiteSpace size="lg" />
                    <div><Button type="primary" onClick={(e) => {this.handleVideoDownload(e);}}>下载</Button></div>
                    <WhiteSpace size="lg" />
                    <div><Button type="primary" onClick={(e) => {this.handleVideoEdit(e);}}>取消</Button></div>
                </div>
              </WingBlank>
            </div >
        );
    }
    static propTypes = {
        video_file_name: PropTypes.string,
        videoFileNameCreate: PropTypes.func,
        video_op: PropTypes.string,
        videoOpCreate: PropTypes.func,
        video_url: PropTypes.string,
        videoUrlCreate: PropTypes.func,
        display_console: PropTypes.string,
        displayConsoleCreate: PropTypes.func,
    }
}

const VideoWrapper = createForm()(Video);
export default VideoWrapper;

