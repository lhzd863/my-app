import XAXIS9_DATA_TYPE from '../types/Xaxis9DataType.js';


const Xaxis9DataReducer= (state = initialState.xaxis9,action)=>{
    switch(action.type){
        case XAXIS9_DATA_TYPE:
            return action.xaxis9;
        default:
            return state;
    }
};

const initialState = {
    xaxis9: []
};

export default Xaxis9DataReducer;
