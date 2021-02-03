import FIELD_EN_NAME_DATA_TYPE from '../types/FieldEnNameDataType.js';

const FieldEnNameDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_EN_NAME_DATA_TYPE:
            return Object.assign({}, state, { field_enname: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_enname: ''
};

export default FieldEnNameDataReducer;
