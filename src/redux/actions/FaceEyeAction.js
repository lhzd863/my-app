import FACE_EYE_TYPE from "../types/FaceEyeType.js";

const FaceEyeAction = (face_eye)=> {
   return {
      type: FACE_EYE_TYPE,
      data: face_eye
   };
};

export default FaceEyeAction;


