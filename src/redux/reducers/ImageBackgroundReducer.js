import IMAGE_BACKGROUND_TYPE from '../types/ImageBackgroundType.js';

const ImageBackgroundReducer= (state = initialState,action)=>{
    switch(action.type){
        case IMAGE_BACKGROUND_TYPE:
            return Object.assign({}, state, { image_background: action.data });
        default:
            return state;
    }
};


const initialState = {
    image_background: ''
};

export default ImageBackgroundReducer;
