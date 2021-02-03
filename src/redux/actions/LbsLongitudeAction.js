import LBS_LONGITUDE_TYPE from "../types/LbsLongitudeType.js";

const LbsLongitudeAction = (lbs_longitude)=> {
   return {
      type: LBS_LONGITUDE_TYPE,
      data: lbs_longitude
   };
};

export default LbsLongitudeAction;


