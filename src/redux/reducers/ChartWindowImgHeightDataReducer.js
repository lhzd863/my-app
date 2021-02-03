import CHART_WINDOW_IMG_HEIGHT_DATA_TYPE from '../types/ChartWindowImgHeightDataType.js';

const ChartWindowImgHeightDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case CHART_WINDOW_IMG_HEIGHT_DATA_TYPE:
            return Object.assign({}, state, { chart_window_img_height: action.data });
        default:
            return state;
    }
};


const initialState = {
    chart_window_img_height: 175
};

export default ChartWindowImgHeightDataReducer;
