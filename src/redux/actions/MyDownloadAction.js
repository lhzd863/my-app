import MY_DOWNLOAD_FILE_LIST from "../types/MyDownloadType.js";

const myDownloadAction = (flst)=> {
   return {
      type: MY_DOWNLOAD_FILE_LIST,
      flst
   };
};


export default myDownloadAction;
