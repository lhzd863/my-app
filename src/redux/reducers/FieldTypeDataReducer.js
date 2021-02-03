import FIELD_TYPE_DATA_TYPE from '../types/FieldTypeDataType.js';

const FieldTypeDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_TYPE_DATA_TYPE:
            return Object.assign({}, state, { field_type: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_type: ''
};

export default FieldTypeDataReducer;
