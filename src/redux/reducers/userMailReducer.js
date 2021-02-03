import { MY_MAIL } from '../types/MyInfoType';

const userMailReducer= (state = initialState,action)=>{
    switch(action.type){
        case MY_MAIL:
            return Object.assign({}, state, { mail: action.data });
        default:
            return state;
    }
};


const initialState = {
    mail: ''
};

export default userMailReducer;
