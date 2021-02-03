import LEASTSQ_AVAL_DATA_TYPE from "../types/LeastsqAvalDataType.js";
import LEASTSQ_BVAL_DATA_TYPE from "../types/LeastsqBvalDataType.js";
import LEASTSQ_CALVAL_DATA_TYPE from "../types/LeastsqCalvalDataType.js";
import LEASTSQ_URL_DATA_TYPE from "../types/LeastsqUrlDataType.js";

export const LeastsqAvalDataAction = (aval)=> {
   return {
      type: LEASTSQ_AVAL_DATA_TYPE,
      data: aval
   };
};


export const LeastsqBvalDataAction = (bval)=> {
   return {
      type: LEASTSQ_BVAL_DATA_TYPE,
      data: bval
   };
};

export const LeastsqCalvalDataAction = (calval)=> {
   return {
      type: LEASTSQ_CALVAL_DATA_TYPE,
      data: calval
   };
};

export const LeastsqUrlDataAction = (url)=> {
   return {
      type: LEASTSQ_URL_DATA_TYPE,
      data: url
   };
};

