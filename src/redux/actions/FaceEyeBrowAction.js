import FACE_EYEBROW_TYPE from "../types/FaceEyeBrowType.js";

const FaceEyeBrowAction = (face_eyebrow)=> {
   return {
      type: FACE_EYEBROW_TYPE,
      data: face_eyebrow
   };
};

export default FaceEyeBrowAction;


