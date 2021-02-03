import XAXIS0_DATA_TYPE from '../types/Xaxis0DataType.js';


const Xaxis0DataReducer= (state = initialState.xaxis0,action)=>{
    switch(action.type){
        case XAXIS0_DATA_TYPE:
            return action.xaxis0;
        default:
            return state;
    }
};

const initialState = {
    xaxis0: []
};

export default Xaxis0DataReducer;
