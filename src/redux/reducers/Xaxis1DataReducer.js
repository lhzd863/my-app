import XAXIS1_DATA_TYPE from '../types/Xaxis1DataType.js';


const Xaxis1DataReducer= (state = initialState.xaxis1,action)=>{
    switch(action.type){
        case XAXIS1_DATA_TYPE:
            return action.xaxis1;
        default:
            return state;
    }
};

const initialState = {
    xaxis1: []
};

export default Xaxis1DataReducer;
