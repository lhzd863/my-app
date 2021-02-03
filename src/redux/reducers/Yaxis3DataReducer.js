import YAXIS3_DATA_TYPE from '../types/Yaxis3DataType.js';


const Yaxis3DataReducer= (state = initialState.yaxis3,action)=>{
    switch(action.type){
        case YAXIS3_DATA_TYPE:
            return action.yaxis3;
        default:
            return state;
    }
};

const initialState = {
    yaxis3: []
};

export default Yaxis3DataReducer;
