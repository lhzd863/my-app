import FACE_EYE_TYPE from '../types/FaceEyeType.js';

const FaceEyeReducer= (state = initialState,action)=>{
    switch(action.type){
        case FACE_EYE_TYPE:
            return Object.assign({}, state, { face_eye: action.data });
        default:
            return state;
    }
};


const initialState = {
    face_eye: 0
};

export default FaceEyeReducer;
