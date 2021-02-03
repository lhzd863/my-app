import YAXIS2_DATA_TYPE from '../types/Yaxis2DataType.js';


const Yaxis2DataReducer= (state = initialState.yaxis2,action)=>{
    switch(action.type){
        case YAXIS2_DATA_TYPE:
            return action.yaxis2;
        default:
            return state;
    }
};

const initialState = {
    yaxis2: []
};

export default Yaxis2DataReducer;
