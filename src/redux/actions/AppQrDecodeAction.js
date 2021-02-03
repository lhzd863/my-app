import APP_QRDECODE_OUTPUT_CONTEXT from "../types/AppQrDecodeType.js";


const appQrDecodeAction = (output_context)=> {
   return {
      type: APP_QRDECODE_OUTPUT_CONTEXT,
      data: output_context
   };
};

export default appQrDecodeAction;
