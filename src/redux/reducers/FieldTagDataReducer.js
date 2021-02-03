import FIELD_TAG_DATA_TYPE from '../types/FieldTagDataType.js';

const FieldTagDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_TAG_DATA_TYPE:
            return Object.assign({}, state, { field_tag: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_tag: ''
};

export default FieldTagDataReducer;
