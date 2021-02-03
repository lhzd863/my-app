import IMAGE_URL_TYPE from "../types/ImageUrlType.js";

const ImageUrlAction = (image_url)=> {
   return {
      type: IMAGE_URL_TYPE,
      data: image_url
   };
};

export default ImageUrlAction;


