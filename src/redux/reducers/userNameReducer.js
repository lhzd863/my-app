import { MY_USERNAME } from '../types/MyInfoType';

const userNameReducer= (state = initialState,action)=>{
    switch(action.type){
        case MY_USERNAME:
            return Object.assign({}, state, { username: action.data });
        default:
            return state;
    }
};


const initialState = {
    username: ''
};

export default userNameReducer;
