import CHART_WINDOW_IMG_WIDTH_DATA_TYPE from "../types/ChartWindowImgWidthDataType.js";

const ChartWindowImgWidthDataAction = (chart_window_img_width)=> {
   return {
      type: CHART_WINDOW_IMG_WIDTH_DATA_TYPE,
      data: chart_window_img_width
   };
};

export default ChartWindowImgWidthDataAction;


