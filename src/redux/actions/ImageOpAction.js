import IMAGE_OP_TYPE from "../types/ImageOpType.js";

const ImageOpAction = (image_op)=> {
   return {
      type: IMAGE_OP_TYPE,
      data: image_op
   };
};

export default ImageOpAction;


