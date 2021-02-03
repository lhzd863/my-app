import YAXIS9_DATA_TYPE from '../types/Yaxis9DataType.js';


const Yaxis9DataReducer= (state = initialState.yaxis9,action)=>{
    switch(action.type){
        case YAXIS9_DATA_TYPE:
            return action.yaxis9;
        default:
            return state;
    }
};

const initialState = {
    yaxis9: []
};

export default Yaxis9DataReducer;
