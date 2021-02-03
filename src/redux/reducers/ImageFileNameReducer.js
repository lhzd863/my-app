import IMAGE_FILE_NAME_TYPE from '../types/ImageFileNameType.js';

const ImageFileNameReducer= (state = initialState,action)=>{
    switch(action.type){
        case IMAGE_FILE_NAME_TYPE:
            return Object.assign({}, state, { image_file_name: action.data });
        default:
            return state;
    }
};


const initialState = {
    image_file_name: ''
};

export default ImageFileNameReducer;
