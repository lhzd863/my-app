import FIELD_CN_NAME_DATA_TYPE from '../types/FieldCnNameDataType.js';

const FieldCnNameDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case FIELD_CN_NAME_DATA_TYPE:
            return Object.assign({}, state, { field_cnname: action.data });
        default:
            return state;
    }
};


const initialState = {
    field_cnname: ''
};

export default FieldCnNameDataReducer;
