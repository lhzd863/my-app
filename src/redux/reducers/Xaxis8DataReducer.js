import XAXIS8_DATA_TYPE from '../types/Xaxis8DataType.js';


const Xaxis8DataReducer= (state = initialState.xaxis8,action)=>{
    switch(action.type){
        case XAXIS8_DATA_TYPE:
            return action.xaxis8;
        default:
            return state;
    }
};

const initialState = {
    xaxis8: []
};

export default Xaxis8DataReducer;
