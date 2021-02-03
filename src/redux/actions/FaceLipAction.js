import FACE_LIP_TYPE from "../types/FaceLipType.js";

const FaceLipAction = (face_lip)=> {
   return {
      type: FACE_LIP_TYPE,
      data: face_lip
   };
};

export default FaceLipAction;


