import FIELD_TARGET_TEXT_DATA_TYPE from '../types/FieldTargetTextDataType.js';

const FieldTargetTextDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_TARGET_TEXT_DATA_TYPE:
            return Object.assign({}, state, { field_target_text: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_target_text: ''
};

export default FieldTargetTextDataReducer;
