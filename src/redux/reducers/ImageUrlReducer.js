import IMAGE_URL_TYPE from '../types/ImageUrlType.js';

const ImageUrlReducer= (state = initialState,action)=>{
    switch(action.type){
        case IMAGE_URL_TYPE:
            return Object.assign({}, state, { image_url: action.data });
        default:
            return state;
    }
};


const initialState = {
    image_url: ''
};

export default ImageUrlReducer;
