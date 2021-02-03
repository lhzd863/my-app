import YAXIS1_DATA_TYPE from '../types/Yaxis1DataType.js';


const Yaxis1DataReducer= (state = initialState.yaxis1,action)=>{
    switch(action.type){
        case YAXIS1_DATA_TYPE:
            return action.yaxis1;
        default:
            return state;
    }
};

const initialState = {
    yaxis1: []
};

export default Yaxis1DataReducer;
