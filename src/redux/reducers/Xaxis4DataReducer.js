import XAXIS4_DATA_TYPE from '../types/Xaxis4DataType.js';


const Xaxis4DataReducer= (state = initialState.xaxis4,action)=>{
    switch(action.type){
        case XAXIS4_DATA_TYPE:
            return action.xaxis4;
        default:
            return state;
    }
};

const initialState = {
    xaxis4: []
};

export default Xaxis4DataReducer;
