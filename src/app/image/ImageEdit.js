import React, { Component } from 'react';
import { WingBlank, WhiteSpace, Button ,Flex,ActionSheet,Toast} from 'antd-mobile';
import "../../common/common.css";
import MyHeader from '../../components/MyHeader.js';
import { createForm } from 'rc-form';
import PropTypes from 'prop-types';
import { Button as EButton,Upload,Message} from 'element-react';
import 'element-theme-default';
import Carousel from 'react-images';

class ImageEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image_file_name: props.image_file_name || '',
            image_op: props.image_op || ''
        };
    }

    dataListFilter = [
      { url: 'aya', title: '素描',act: 'filter-sketch' },
      { url: 'aya', title: '彩色转黑白' ,act: 'filter-blackwithe'},
      { url: 'aya', title: '流年' ,act: 'filter-fleeting'},
      { url: 'aya', title: '旧电影' ,act: 'filter-oldfilm'},
      { url: 'aya', title: '反色',act: 'filter-reverse' },
    ].map(obj => ({
      icon: <img src={`http://106.75.249.244:9000/my-app/images/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      title: obj.title,
      act: obj.act
    }));

    dataListFilter1 = [
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

    dataListFilter2 = [
      { url: 'aya', title: '怀旧',act: 'filter-older' },
      { url: 'aya', title: '光照',act: 'filter-lighting' },
      { url: 'aya', title: '滤镜',act: 'filter-filter' },
      { url: 'aya', title: '手绘',act: 'filter-timg' },
      { url: 'aya', title: '哈哈镜-局部放大',act: 'filter-maxframe' },
      { url: 'aya', title: '哈哈镜-局部缩小',act: 'filter-minframe' },
      { url: 'aya', title: '泛黄',act: 'filter-yellower' },
      { url: 'aya', title: '水波',act: 'filter-water' },
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
      { url: 'aya', title: '绿背景',act: 'hsv-green' },
      { url: 'aya', title: '黑背景',act: 'hsv-black' },
      { url: 'aya', title: '蓝背景',act: 'hsv-blue' },
      { url: 'aya', title: '紫背景',act: 'hsv-violet' },
      { url: 'aya', title: '青背景',act: 'hsv-cyan' },
      { url: 'aya', title: '青背景1',act: 'hsv-cyan1' },
      { url: 'aya', title: '黄背景',act: 'hsv-yellow' },
      { url: 'aya', title: '橙背景',act: 'hsv-grey' },
      { url: 'aya', title: '白背景',act: 'hsv-white' },
      { url: 'aya', title: '红背景1',act: 'hsv-red0' },
      { url: 'aya', title: '红背景',act: 'hsv-red' },
    ].map(obj => ({
      icon: <img src={`http://106.75.249.244:9000/my-app/images/${obj.url}.png`} alt={obj.title} style={{ width: 36 }} />,
      title: obj.title,
      act: obj.act
    }));

    handleImageDowith(e){
       this.handleData()
    }

    handleImageDownload(){
       window.location.href=this.props.image_url
    }

    handleImageEdit(){
       this.props.displayConsoleCreate('block');
    }
    handleShowActionSheetFilter(){
       const data = [[...this.dataListFilter], [...this.dataListFilter1], [...this.dataListFilter2]];
         ActionSheet.showShareActionSheetWithOptions({
         options: data,
         message: '请选择',
       },
       (buttonIndex, rowIndex) => {
         this.props.imageOpCreate(buttonIndex > -1 ? data[rowIndex][buttonIndex].act:'no');
       });
    }

    handleShowActionSheetStage(){
       const data = [[...this.dataListStage ] ];
         ActionSheet.showShareActionSheetWithOptions({
         options: data,
         message: '请选择',
       },
       (buttonIndex, rowIndex) => {
         this.props.imageOpCreate(buttonIndex > -1 ? data[rowIndex][buttonIndex].act:'no');
       });
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
       this.props.imageOpCreate('');
       this.props.imageUrlCreate('');
       this.props.displayConsoleCreate('block');
    }

    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 5;

        if (!isLt2M) {
            Message('上传大小不能超过 5MB!');
        }
        Toast.loading('Loading...', 0, () => {
           console.log('正在上传文件!!!');
        });
        return isLt2M;
    }

    handleAvatarSuccess(res, file) {
       this.props.imageFileNameCreate(res[0].filename);
       Toast.hide();
    }
    
    
    handleAvatarSuccessPic(res, file,type) {
       this.props.imageBackgroundCreate(res[0].filename);
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
              <MyHeader myheadertitle={global.constants.const_app_image_edit} />
              <WhiteSpace size="lg" />
              <WingBlank size="lg">
                <div key='image-1' style={{ display: displayconsole==='none'?'none':'block' }}>
                  <div style={{ margin: 30,}} >
                    <div>
                       <Flex>
                           <Flex.Item>
                             <Upload
                               className="avatar-uploader"
                               showFileList={false}
                               action={global.constants.const_api_url + "/app/image/upload?accesstoken=" + accesstoken}
                               onPreview={file => this.handlePreview(file)}
                               onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                               beforeUpload={file => this.beforeAvatarUpload(file)}
                               onSuccess={(res,file) => this.handleAvatarSuccess(res,file)}
                             >
                               <EButton type="info" ><i className="el-icon-plus"></i></EButton>
                             </Upload>
                           </Flex.Item>
                           <Flex.Item>
                             <Upload
                               className="avatar-uploader"
                               showFileList={false}
                               action={global.constants.const_api_url + "/app/image/upload?accesstoken=" + accesstoken}
                               onPreview={file => this.handlePreview(file)}
                               onRemove={(file, fileList) => this.handleRemove(file, fileList)}
                               beforeUpload={file => this.beforeAvatarUpload(file)}
                               onSuccess={(res,file) => this.handleAvatarSuccessPic(res,file)}
                             >
                               <EButton type="info" ><i className="el-icon-picture">背景</i></EButton>
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
                  <div><Button type="primary" onClick={(e) => {this.handleImageDowith(e);}}>提交</Button></div>
                </div>
                <div key='image-2' style={{ display: displayconsole==='none'?'block':'none' }}>
                    <div>
                      <Carousel views={[{ source: this.props.image_url }]} />
                    </div>
                    <WhiteSpace size="lg" />
                    <div><Button type="primary" onClick={(e) => {this.handleImageDownload(e);}}>下载</Button></div>
                    <WhiteSpace size="lg" />
                    <div><Button type="primary" onClick={(e) => {this.handleImageEdit(e);}}>取消</Button></div>
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

const ImageEditWrapper = createForm()(ImageEdit);
export default ImageEditWrapper;

