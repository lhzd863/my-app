import DIALOG_VISIBLE_DATA_TYPE from '../types/DialogVisibleDataType.js';

const DialogVisibleDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case DIALOG_VISIBLE_DATA_TYPE:
            return Object.assign({}, state, { dialogvisible: action.data });
        default:
            return state;
    }
};


const initialState = {
    dialogvisible: false
};

export default DialogVisibleDataReducer;
