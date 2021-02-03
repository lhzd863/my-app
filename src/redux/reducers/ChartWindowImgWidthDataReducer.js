import CHART_WINDOW_IMG_WIDTH_DATA_TYPE from '../types/ChartWindowImgWidthDataType.js';

const ChartWindowImgWidthDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_WINDOW_IMG_WIDTH_DATA_TYPE:
            return Object.assign({}, state, { chart_window_img_width: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_window_img_width: 350
};

export default ChartWindowImgWidthDataReducer;
