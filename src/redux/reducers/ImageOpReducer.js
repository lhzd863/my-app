import IMAGE_OP_TYPE from '../types/ImageOpType.js';

const ImageOpReducer= (state = initialState,action)=>{
    switch(action.type){
        case IMAGE_OP_TYPE:
            return Object.assign({}, state, { image_op: action.data });
        default:
            return state;
    }
};


const initialState = {
    image_op: ''
};

export default ImageOpReducer;
