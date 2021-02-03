import LBS_LATITUDE_TYPE from "../types/LbsLatitudeType.js";

const LbsLatitudeAction = (lbs_latitude)=> {
   return {
      type: LBS_LATITUDE_TYPE,
      data: lbs_latitude
   };
};

export default LbsLatitudeAction;


