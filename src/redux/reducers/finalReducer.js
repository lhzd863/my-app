import { combineReducers } from 'redux';
import userAliasReducer from './userAliasReducer.js';
import userIdReducer from './userIdReducer.js';
import userMailReducer from './userMailReducer.js';
import userNameReducer from './userNameReducer.js';
import appQrDecodeReducer from './appQrDecodeReducer.js';
import appQrcodeReducer from './appQrcodeReducer.js';
import myDownloadReducer from './myDownloadReducer.js';
import ArrayDataReducer from './ArrayDataReducer.js';
import ArrayData0Reducer from './ArrayData0Reducer.js';
import ArrayData1Reducer from './ArrayData1Reducer.js';
import ArrayData2Reducer from './ArrayData2Reducer.js';
import ArrayData3Reducer from './ArrayData3Reducer.js';
import CtitleDataReducer from './CtitleDataReducer.js';
import LeastsqAvalReducer from './LeastsqAvalReducer.js';
import LeastsqBvalReducer from './LeastsqBvalReducer.js';
import LeastsqCalvalReducer from './LeastsqCalvalReducer.js';
import LeastsqUrlReducer from './LeastsqUrlReducer.js';
import DisplayNameReducer from './DisplayNameDataReducer.js';
import DisplayConsoleDataReducer from './DisplayConsoleDataReducer.js';
import ArrayConsoleDataReducer from './ArrayConsoleDataReducer.js';
import DialogVisibleDataReducer from './DialogVisibleDataReducer.js';
import ChartLabelDataReducer from './ChartLabelDataReducer.js';
import ChartLabelPositionDataReducer from './ChartLabelPositionDataReducer.js';
import ChartLabelEnableDataReducer from './ChartLabelEnableDataReducer.js';
import ChartTitleDataReducer from './ChartTitleDataReducer.js';
import ChartTitlePositionDataReducer from './ChartTitlePositionDataReducer.js';
import ChartTitleEnableDataReducer from './ChartTitleEnableDataReducer.js';
import ChartXaxisDataReducer from './ChartXaxisDataReducer.js';
import ChartXaxisEnableDataReducer from './ChartXaxisEnableDataReducer.js';
import ChartYaxisDataReducer from './ChartYaxisDataReducer.js';
import ChartYaxisEnableDataReducer from './ChartYaxisEnableDataReducer.js';
import ChartWindowHeightDataReducer from './ChartWindowHeightDataReducer.js';
import ChartWindowImgHeightDataReducer from './ChartWindowImgHeightDataReducer.js';
import ChartWindowWidthDataReducer from './ChartWindowWidthDataReducer.js';
import ChartWindowImgWidthDataReducer from './ChartWindowImgWidthDataReducer.js';
import ChartLeastsqConsoleExpressEnableDataReducer from './ChartLeastsqConsoleExpressEnableDataReducer.js';
import ChartLeastsqRealValueDataReducer from './ChartLeastsqRealValueDataReducer.js';
import ChartLeastsqRealValueResultEnableDataReducer from './ChartLeastsqRealValueResultEnableDataReducer.js';
import AppAudioPlayDataReducer from './AppAudioPlayDataReducer.js';
import ChartFitLineOptimizedTimeDataReducer from './ChartFitLineOptimizedTimeDataReducer.js';
import ChartFitLineLossValueDataReducer from './ChartFitLineLossValueDataReducer.js';
import LoadingEnableDataReducer from './LoadingEnableDataReducer.js';
import FieldCnNameDataReducer from './FieldCnNameDataReducer.js';
import FieldEnNameDataReducer from './FieldEnNameDataReducer.js';
import FieldTypeDataReducer from './FieldTypeDataReducer.js';
import FieldTagDataReducer from './FieldTagDataReducer.js';
import FieldSourceTextDataReducer from './FieldSourceTextDataReducer.js';
import FieldTargetTextDataReducer from './FieldTargetTextDataReducer.js';
import AppAudioPlayCatalogDataReducer from './AppAudioPlayCatalogDataReducer.js';
import AppAudioPlayNameDataReducer from './AppAudioPlayNameDataReducer.js';
import AppAudioPlaySequenceDataReducer from './AppAudioPlaySequenceDataReducer.js';
import AppAudioPlayInfoDataReducer from './AppAudioPlayInfoDataReducer.js';
import AppAudioPlayAmountDataReducer from './AppAudioPlayAmountDataReducer.js';
import AppAudioPlayContextDataReducer from './AppAudioPlayContextDataReducer.js';
import AppAudioPlayImgDataReducer from './AppAudioPlayImgDataReducer.js';
import AppAudioPlayStatusDataReducer from './AppAudioPlayStatusDataReducer.js';
import AppAudioPlayUrlDataReducer from './AppAudioPlayUrlDataReducer.js';
import AppAudioPlayAnnouncerDataReducer from './AppAudioPlayAnnouncerDataReducer.js';
import AppAudioPlayAuthorDataReducer from './AppAudioPlayAuthorDataReducer.js';
import AppAudioPlayUdtDataReducer from './AppAudioPlayUdtDataReducer.js';
import ZdwstStateVersionReducer from './ZdwstStateVersionReducer.js';
import ZdwstHeaderStackReducer from './ZdwstHeaderStackReducer.js';
import ZdwstCurrentRouterReducer from './ZdwstCurrentRouterReducer.js';
import AppAudioPlayFormatDataReducer from './AppAudioPlayFormatDataReducer.js';
import AppAudioPlayBackRateDataReducer from './AppAudioPlayBackRateDataReducer.js';
import AppNewsTagDataReducer from './AppNewsTagDataReducer.js';
import AppRegionDataReducer from './AppRegionDataReducer.js';
import AppSelectPeriodDataReducer from './AppSelectPeriodDataReducer.js';
import AppTagDataReducer from './AppTagDataReducer.js';
import AppSelectIndexDataReducer from './AppSelectIndexDataReducer.js';
import Xaxis0DataReducer from './Xaxis0DataReducer.js';
import Xaxis1DataReducer from './Xaxis1DataReducer.js';
import Xaxis2DataReducer from './Xaxis2DataReducer.js';
import Xaxis3DataReducer from './Xaxis3DataReducer.js';
import Xaxis4DataReducer from './Xaxis4DataReducer.js';
import Xaxis5DataReducer from './Xaxis5DataReducer.js';
import Xaxis6DataReducer from './Xaxis6DataReducer.js';
import Xaxis7DataReducer from './Xaxis7DataReducer.js';
import Xaxis8DataReducer from './Xaxis8DataReducer.js';
import Xaxis9DataReducer from './Xaxis9DataReducer.js';
import Yaxis0DataReducer from './Yaxis0DataReducer.js';
import Yaxis1DataReducer from './Yaxis1DataReducer.js';
import Yaxis2DataReducer from './Yaxis2DataReducer.js';
import Yaxis3DataReducer from './Yaxis3DataReducer.js';
import Yaxis4DataReducer from './Yaxis4DataReducer.js';
import Yaxis5DataReducer from './Yaxis5DataReducer.js';
import Yaxis6DataReducer from './Yaxis6DataReducer.js';
import Yaxis7DataReducer from './Yaxis7DataReducer.js';
import Yaxis8DataReducer from './Yaxis8DataReducer.js';
import Yaxis9DataReducer from './Yaxis9DataReducer.js';
import LbsLongitudeReducer from './LbsLongitudeReducer.js';
import LbsLatitudeReducer from './LbsLatitudeReducer.js';
import IconUrlReducer from './IconUrlReducer.js';
import Txt2AudioRateReducer from './Txt2AudioRateReducer.js';
import Txt2AudioTextReducer from './Txt2AudioTextReducer.js';
import Txt2AudioVoiceReducer from './Txt2AudioVoiceReducer.js';
import Txt2AudioVoicesReducer from './Txt2AudioVoicesReducer.js';
import Txt2AudioVolumeReducer from './Txt2AudioVolumeReducer.js';
import FaceEyeReducer from './FaceEyeReducer.js';
import FaceEyeBrowReducer from './FaceEyeBrowReducer.js';
import FaceLipReducer from './FaceLipReducer.js';
import StatTotalNumReducer from './StatTotalNumReducer.js';
import StatCurNumReducer from './StatCurNumReducer.js';
import StatIpNumReducer from './StatIpNumReducer.js';
import StatCurIpNumReducer from './StatCurIpNumReducer.js';
import StatDtReducer from './StatDtReducer.js';
import VideoFileNameReducer from './VideoFileNameReducer.js';
import VideoOpReducer from './VideoOpReducer.js';
import VideoUrlReducer from './VideoUrlReducer.js';
import ImageFileNameReducer from './ImageFileNameReducer.js';
import ImageOpReducer from './ImageOpReducer.js';
import ImageUrlReducer from './ImageUrlReducer.js';
import ImageBackgroundReducer from './ImageBackgroundReducer.js';

export const finalReducer = combineReducers({
   userNameReducer,
   userIdReducer,
   userAliasReducer,
   userMailReducer,
   appQrDecodeReducer,
   appQrcodeReducer,
   myDownloadReducer,
   ArrayDataReducer,
   ArrayData0Reducer,
   ArrayData1Reducer,
   ArrayData2Reducer,
   ArrayData3Reducer,
   CtitleDataReducer,
   LeastsqAvalReducer,
   LeastsqBvalReducer,
   LeastsqCalvalReducer,
   LeastsqUrlReducer,
   DisplayNameReducer,
   DisplayConsoleDataReducer,
   ArrayConsoleDataReducer,
   DialogVisibleDataReducer,
   ChartLabelEnableDataReducer,
   ChartLabelDataReducer,
   ChartLabelPositionDataReducer,
   ChartTitleEnableDataReducer,
   ChartTitleDataReducer,
   ChartTitlePositionDataReducer,
   ChartXaxisDataReducer,
   ChartXaxisEnableDataReducer,
   ChartYaxisDataReducer,
   ChartYaxisEnableDataReducer,
   ChartWindowHeightDataReducer,
   ChartWindowWidthDataReducer,
   ChartWindowImgHeightDataReducer,
   ChartWindowImgWidthDataReducer,
   ChartLeastsqConsoleExpressEnableDataReducer,
   ChartLeastsqRealValueDataReducer,
   ChartLeastsqRealValueResultEnableDataReducer,
   AppAudioPlayDataReducer,
   ChartFitLineOptimizedTimeDataReducer,
   LoadingEnableDataReducer,
   ChartFitLineLossValueDataReducer,
   FieldCnNameDataReducer,
   FieldTypeDataReducer,
   FieldEnNameDataReducer,
   FieldTagDataReducer,
   FieldSourceTextDataReducer,
   FieldTargetTextDataReducer,
   AppAudioPlayCatalogDataReducer,
   AppAudioPlayNameDataReducer,
   AppAudioPlaySequenceDataReducer,
   AppAudioPlayInfoDataReducer,
   AppAudioPlayAmountDataReducer,
   AppAudioPlayContextDataReducer,
   AppAudioPlayImgDataReducer,
   AppAudioPlayStatusDataReducer,
   AppAudioPlayUrlDataReducer,
   AppAudioPlayAnnouncerDataReducer,
   AppAudioPlayAuthorDataReducer,
   AppAudioPlayUdtDataReducer,
   ZdwstHeaderStackReducer,
   ZdwstStateVersionReducer,
   ZdwstCurrentRouterReducer,
   AppAudioPlayFormatDataReducer,
   AppAudioPlayBackRateDataReducer,
   AppNewsTagDataReducer,
   AppRegionDataReducer,
   AppSelectPeriodDataReducer,
   AppTagDataReducer,
   AppSelectIndexDataReducer,
   Xaxis0DataReducer,
   Xaxis1DataReducer,
   Xaxis2DataReducer,
   Xaxis3DataReducer,
   Xaxis4DataReducer,
   Xaxis5DataReducer,
   Xaxis6DataReducer,
   Xaxis7DataReducer,
   Xaxis8DataReducer,
   Xaxis9DataReducer,
   Yaxis0DataReducer,
   Yaxis1DataReducer,
   Yaxis2DataReducer,
   Yaxis3DataReducer,
   Yaxis4DataReducer,
   Yaxis5DataReducer,
   Yaxis6DataReducer,
   Yaxis7DataReducer,
   Yaxis8DataReducer,
   Yaxis9DataReducer,
   LbsLongitudeReducer,
   LbsLatitudeReducer,
   IconUrlReducer,
   Txt2AudioRateReducer,
   Txt2AudioTextReducer,
   Txt2AudioVoiceReducer,
   Txt2AudioVoicesReducer,
   Txt2AudioVolumeReducer,
   FaceEyeReducer,
   FaceEyeBrowReducer,
   FaceLipReducer,
   StatTotalNumReducer,
   StatCurNumReducer,
   StatIpNumReducer,
   StatCurIpNumReducer,
   StatDtReducer,
   VideoFileNameReducer,
   VideoOpReducer,
   VideoUrlReducer,
   ImageFileNameReducer,
   ImageOpReducer,
   ImageUrlReducer,
   ImageBackgroundReducer
});

