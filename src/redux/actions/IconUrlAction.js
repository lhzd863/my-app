import ICON_URL_TYPE from "../types/IconUrlType.js";

const IconUrlAction = (icon_url)=> {
   return {
      type: ICON_URL_TYPE,
      data: icon_url
   };
};

export default IconUrlAction;


