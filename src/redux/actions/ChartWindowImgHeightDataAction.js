import CHART_WINDOW_IMG_HEIGHT_DATA_TYPE from "../types/ChartWindowImgHeightDataType.js";

const ChartWindowImgHeightDataAction = (chart_window_img_height)=> {
   return {
      type: CHART_WINDOW_IMG_HEIGHT_DATA_TYPE,
      data: chart_window_img_height
   };
};

export default ChartWindowImgHeightDataAction;


