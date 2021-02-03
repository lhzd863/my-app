import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyInfoContainers from "./redux/containers/MyInfoContainers.js";
import LoginWrapper from "./main/Login.js";
import MyRegisterWrapper from "./main/MyRegister.js";
import AppMain from "./main/App-Main.js";
import MyStatement from "./main/MyStatement.js";
import App404 from "./main/App-404.js";
import MyQrCode from "./main/MyQrCode.js";
import ToolsRegisterWrapper from "./main/ToolsRegister.js";

import AppQrDecodeContainers from "./redux/containers/AppQrDecodeContainers.js";
import AppQrcodeContainers from "./redux/containers/AppQrcodeContainers.js";
import AppUpload from "./app/uploaddowload/AppUpload.js";
import MyUpload from "./main/MyUpload.js";
import MyDownloadContainers from "./redux/containers/MyDownloadContainers.js";
import AppLineChartContainers from "./redux/containers/AppLineChartContainers.js";
import AppPieChartContainers from "./redux/containers/AppPieChartContainers.js";
import AppRadarChartContainers from "./redux/containers/AppRadarChartContainers.js";
import AppHorizontalBarChartContainers from "./redux/containers/AppHorizontalBarChartContainers.js";
import AppBarChartContainers from "./redux/containers/AppBarChartContainers.js";
import AppDoughnutChartContainers from "./redux/containers/AppDoughnutChartContainers.js";
import AppPolarChartContainers from "./redux/containers/AppPolarChartContainers.js";
import AppLeastsqChartContainers from "./redux/containers/AppLeastsqChartContainers.js";
import AppBubbleChartContainers from "./redux/containers/AppBubbleChartContainers.js";
import AppScatterChartContainers from "./redux/containers/AppScatterChartContainers.js";
import AppFitLineChartContainers from "./redux/containers/AppFitLineChartContainers.js";
import AppCorrChartContainers from "./redux/containers/AppCorrChartContainers.js";
import AdminFieldCn2En from './admin/AdminFieldCn2En.js';
import AdminScriptPackage from './admin/AdminScriptPackage.js';
import AppAudioPlayDataContainers from './redux/containers/AppAudioPlayDataContainers.js';
import AppAudioCatalogDataContainers from './redux/containers/AppAudioCatalogDataContainers.js';
import AppAudioListDataContainers from './redux/containers/AppAudioListDataContainers.js';
import AppAudioSearchDataContainers from './redux/containers/AppAudioSearchDataContainers.js';
import AdminAudioAdd from './admin/audio/AdminAudioAdd.js';
import AppAudioPlaySetDataContainers from './redux/containers/AppAudioPlaySetDataContainers.js';
//import AdminDemo from './admin/AdminDemo.js';

import AppNewsListDataContainers from './redux/containers/AppNewsListDataContainers.js';
import AppNewsDataContainers from './redux/containers/AppNewsDataContainers.js';
import AppDataPigContainers from './redux/containers/AppDataPigContainers.js';
import AppAmapContainers from './redux/containers/AppAmapContainers.js';
import AppPricePigContainers from './redux/containers/AppPricePigContainers.js';
import Txt2AudioContainers from './redux/containers/Txt2AudioContainers.js';
import FaceDrawContainers from './redux/containers/FaceDrawContainers.js';
import ChirstmasHatContainers from './redux/containers/ChirstmasHatContainers.js';
import AccessLogContainers from './redux/containers/AccessLogContainers.js';
import VideoContainers from './redux/containers/VideoContainers.js';
import ImageEditContainers from './redux/containers/ImageEditContainers.js';
import SignPage from './app/signature/SignPage.js';

//import Video from './app/video/Video.js';
class Routes extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={AppMain} />
            <Route path="/login" component={LoginWrapper} />
            <Route path="/register" component={MyRegisterWrapper} />
            <Route path="/myinfo" component={MyInfoContainers} />
            <Route path="/statement" component={MyStatement} />
            <Route path="/my/qrcode" component={MyQrCode} />
            <Route path="/my/upload" component={MyUpload} />
            <Route path="/my/download" component={MyDownloadContainers} />
            <Route path="/tools/register" component={ToolsRegisterWrapper} />
            <Route path="/app/qrdecode" component={AppQrDecodeContainers} />
            <Route path="/app/qrcode" component={AppQrcodeContainers} />
            <Route path="/app/upload" component={AppUpload} />
            <Route path="/app/chart/bar" component={AppBarChartContainers} />
            <Route path="/app/chart/line" component={AppLineChartContainers} />
            <Route path="/app/chart/bubble" component={AppBubbleChartContainers} />
            <Route path="/app/chart/doughnut" component={AppDoughnutChartContainers} />
            <Route path="/app/chart/horizontalbar" component={AppHorizontalBarChartContainers} />
            <Route path="/app/chart/pie" component={AppPieChartContainers} />
            <Route path="/app/chart/polar" component={AppPolarChartContainers} />
            <Route path="/app/chart/radar" component={AppRadarChartContainers} />
            <Route path="/app/chart/scatter" component={AppScatterChartContainers} />
            <Route path="/app/chart/leastsq" component={AppLeastsqChartContainers} />
            <Route path="/app/chart/fitline" component={AppFitLineChartContainers} />
            <Route path="/app/chart/corr" component={AppCorrChartContainers} />
            <Route path="/admin/field" component={AdminFieldCn2En} />
            <Route path="/admin/scriptpackage" component={AdminScriptPackage} />
            <Route path="/admin/audio/add" component={AdminAudioAdd} />
            <Route path="/app/audio/catalog" component={AppAudioCatalogDataContainers} />
            <Route path="/app/audio/list" component={AppAudioListDataContainers} />
            <Route path="/app/audio/playset" component={AppAudioPlaySetDataContainers} />
            <Route path="/app/audio/play" component={AppAudioPlayDataContainers} />
            <Route path="/app/audio/search" component={AppAudioSearchDataContainers} />
            <Route path="/app/news/ls" component={AppNewsListDataContainers} />
            <Route path="/app/news/tag" component={AppNewsDataContainers} />
            <Route path="/app/price/pig" component={AppDataPigContainers} />
            <Route path="/app/price/pigyear" component={AppPricePigContainers} />
            <Route path="/app/map/amap" component={AppAmapContainers} />
            <Route path="/app/txt/audio" component={Txt2AudioContainers} />
	    <Route path="/app/face/draw" component={FaceDrawContainers} />
	    <Route path="/app/chirstmas" component={ChirstmasHatContainers} />
	    <Route path="/app/stat/accesslog" component={AccessLogContainers} />
            <Route path="/app/video" component={VideoContainers} />
            <Route path="/app/image/edit" component={ImageEditContainers} />
            <Route path="/app/image/signature" component={SignPage} />
            <Route component={App404} />
          </Switch>
        </Router>
      </div>
    );
  }

}

export default Routes;

