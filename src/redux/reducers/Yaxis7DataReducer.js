import YAXIS7_DATA_TYPE from '../types/Yaxis7DataType.js';


const Yaxis7DataReducer= (state = initialState.yaxis7,action)=>{
    switch(action.type){
        case YAXIS7_DATA_TYPE:
            return action.yaxis7;
        default:
            return state;
    }
};

const initialState = {
    yaxis7: []
};

export default Yaxis7DataReducer;
