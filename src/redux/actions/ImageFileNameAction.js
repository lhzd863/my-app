import IMAGE_FILE_NAME_TYPE from "../types/ImageFileNameType.js";

const ImageFileNameAction = (image_file_name)=> {
   return {
      type: IMAGE_FILE_NAME_TYPE,
      data: image_file_name
   };
};

export default ImageFileNameAction;


