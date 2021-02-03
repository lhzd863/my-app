import { MY_ALIAS } from '../types/MyInfoType';


const userAliasReducer = (state = initialState,action) =>{
    switch(action.type){
        case MY_ALIAS:
            return Object.assign({}, state, { alias: action.data });
        default:
            return state;
    }
};


const initialState = {
    alias: ''
};

export default userAliasReducer;
