import XAXIS2_DATA_TYPE from '../types/Xaxis2DataType.js';


const Xaxis2DataReducer= (state = initialState.xaxis2,action)=>{
    switch(action.type){
        case XAXIS2_DATA_TYPE:
            return action.xaxis2;
        default:
            return state;
    }
};

const initialState = {
    xaxis2: []
};

export default Xaxis2DataReducer;
