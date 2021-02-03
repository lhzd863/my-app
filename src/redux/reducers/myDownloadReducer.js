import MY_DOWNLOAD_FILE_LIST from '../types/MyDownloadType.js';

const myDownloadReducer= (state = initialState,action)=>{
    switch(action.type){
        case MY_DOWNLOAD_FILE_LIST:
            //var obj = new Array();
            //if ((state.flst).length>0) {
            //   obj.push(state.flst);
            //   obj.push(action.flst);
            //}else{
            //   obj = action.flst;
            //}
            return action.flst;
        default:
            return state;
    }
};


const initialState = {
    flst: []
};

export default myDownloadReducer;
