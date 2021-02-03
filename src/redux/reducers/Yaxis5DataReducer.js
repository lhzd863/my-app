import YAXIS5_DATA_TYPE from '../types/Yaxis5DataType.js';


const Yaxis5DataReducer= (state = initialState.yaxis5,action)=>{
    switch(action.type){
        case YAXIS5_DATA_TYPE:
            return action.yaxis5;
        default:
            return state;
    }
};

const initialState = {
    yaxis5: []
};

export default Yaxis5DataReducer;
