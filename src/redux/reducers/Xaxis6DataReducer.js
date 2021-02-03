import XAXIS6_DATA_TYPE from '../types/Xaxis6DataType.js';


const Xaxis6DataReducer= (state = initialState.xaxis6,action)=>{
    switch(action.type){
        case XAXIS6_DATA_TYPE:
            return action.xaxis6;
        default:
            return state;
    }
};

const initialState = {
    xaxis6: []
};

export default Xaxis6DataReducer;
