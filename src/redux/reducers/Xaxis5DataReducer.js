import XAXIS5_DATA_TYPE from '../types/Xaxis5DataType.js';


const Xaxis5DataReducer= (state = initialState.xaxis5,action)=>{
    switch(action.type){
        case XAXIS5_DATA_TYPE:
            return action.xaxis5;
        default:
            return state;
    }
};

const initialState = {
    xaxis5: []
};

export default Xaxis5DataReducer;
