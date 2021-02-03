import YAXIS8_DATA_TYPE from '../types/Yaxis8DataType.js';


const Yaxis8DataReducer= (state = initialState.yaxis8,action)=>{
    switch(action.type){
        case YAXIS8_DATA_TYPE:
            return action.yaxis8;
        default:
            return state;
    }
};

const initialState = {
    yaxis8: []
};

export default Yaxis8DataReducer;
