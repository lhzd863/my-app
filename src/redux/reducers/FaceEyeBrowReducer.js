import FACE_EYEBROW_TYPE from '../types/FaceEyeBrowType.js';

const FaceEyeBrowReducer= (state = initialState,action)=>{
    switch(action.type){
        case FACE_EYEBROW_TYPE:
            return Object.assign({}, state, { face_eyebrow: action.data });
        default:
            return state;
    }
};


const initialState = {
    face_eyebrow: 0
};

export default FaceEyeBrowReducer;
