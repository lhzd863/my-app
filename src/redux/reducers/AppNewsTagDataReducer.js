import APP_NEWS_TAG_TYPE from '../types/AppNewsTagType.js';

const AppNewsTagDataReducer= (state = initialState,action)=>{
    switch(action.type){
        case APP_NEWS_TAG_TYPE:
            return Object.assign({}, state, { news_tag: action.data });
        default:
            return state;
    }
};


const initialState = {
    news_tag: ''
};

export default AppNewsTagDataReducer;
