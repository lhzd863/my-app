import FACE_LIP_TYPE from '../types/FaceLipType.js';

const FaceLipReducer= (state = initialState,action)=>{
    switch(action.type){
        case FACE_LIP_TYPE:
            return Object.assign({}, state, { face_lip: action.data });
        default:
            return state;
    }
};


const initialState = {
    face_lip: 0
};

export default FaceLipReducer;
