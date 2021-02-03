import YAXIS4_DATA_TYPE from '../types/Yaxis4DataType.js';


const Yaxis4DataReducer= (state = initialState.yaxis4,action)=>{
    switch(action.type){
        case YAXIS4_DATA_TYPE:
            return action.yaxis4;
        default:
            return state;
    }
};

const initialState = {
    yaxis4: []
};

export default Yaxis4DataReducer;
