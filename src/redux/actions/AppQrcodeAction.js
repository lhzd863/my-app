import APP_QRCODE_OUTPUT_CONTEXT from "../types/AppQrcodeType.js";

const appQrcodeAction = (qrcode_context)=> {
   return {
      type: APP_QRCODE_OUTPUT_CONTEXT,
      data: qrcode_context
   };
};

export default appQrcodeAction;
