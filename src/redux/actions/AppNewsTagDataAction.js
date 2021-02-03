import APP_NEWS_TAG_TYPE from "../types/AppNewsTagType.js";

const AppNewsTagDataAction = (news_tag)=> {
   return {
      type: APP_NEWS_TAG_TYPE,
      data: news_tag
   };
};

export default AppNewsTagDataAction;


