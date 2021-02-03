import FIELD_SOURCE_TEXT_DATA_TYPE from '../types/FieldSourceTextDataType.js';

const FieldSourceTextDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_SOURCE_TEXT_DATA_TYPE:
            return Object.assign({}, state, { field_source_text: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_source_text: ''
};

export default FieldSourceTextDataReducer;
