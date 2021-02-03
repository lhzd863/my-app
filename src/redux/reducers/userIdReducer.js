import { MY_USERID } from '../types/MyInfoType';

const userIdReducer = (state = initialState,action)=>{
    switch(action.type){
        case MY_USERID:
            return Object.assign({}, state, { userid: action.data });
        default:
            return state;
    }
};


const initialState = {
    userid: ''
};

export default userIdReducer;
