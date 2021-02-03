import YAXIS6_DATA_TYPE from '../types/Yaxis6DataType.js';


const Yaxis6DataReducer= (state = initialState.yaxis6,action)=>{
    switch(action.type){
        case YAXIS6_DATA_TYPE:
            return action.yaxis6;
        default:
            return state;
    }
};

const initialState = {
    yaxis6: []
};

export default Yaxis6DataReducer;
