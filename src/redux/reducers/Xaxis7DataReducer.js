import XAXIS7_DATA_TYPE from '../types/Xaxis7DataType.js';


const Xaxis7DataReducer= (state = initialState.xaxis7,action)=>{
    switch(action.type){
        case XAXIS7_DATA_TYPE:
            return action.xaxis7;
        default:
            return state;
    }
};

const initialState = {
    xaxis7: []
};

export default Xaxis7DataReducer;
