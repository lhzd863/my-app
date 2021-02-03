import IMAGE_BACKGROUND_TYPE from "../types/ImageBackgroundType.js";

const ImageBackgroundAction = (image_background)=> {
   return {
      type: IMAGE_BACKGROUND_TYPE,
      data: image_background
   };
};

export default ImageBackgroundAction;


