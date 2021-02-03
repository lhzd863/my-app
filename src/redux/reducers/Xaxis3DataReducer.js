import XAXIS3_DATA_TYPE from '../types/Xaxis3DataType.js';


const Xaxis3DataReducer= (state = initialState.xaxis3,action)=>{
    switch(action.type){
        case XAXIS3_DATA_TYPE:
            return action.xaxis3;
        default:
            return state;
    }
};

const initialState = {
    xaxis3: []
};

export default Xaxis3DataReducer;
