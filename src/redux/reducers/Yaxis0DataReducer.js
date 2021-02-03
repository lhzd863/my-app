import YAXIS0_DATA_TYPE from '../types/Yaxis0DataType.js';


const Yaxis0DataReducer= (state = initialState.yaxis0,action)=>{
    switch(action.type){
        case YAXIS0_DATA_TYPE:
            return action.yaxis0;
        default:
            return state;
    }
};

const initialState = {
    yaxis0: []
};

export default Yaxis0DataReducer;
