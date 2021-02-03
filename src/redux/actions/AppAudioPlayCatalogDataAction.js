import APP_AUDIO_PLAY_CATALOG_TYPE from "../types/AppAudioPlayCatalogType.js";

const AppAudioPlayCatalogDataAction = (audio_play_catalog)=> {
   return {
      type: APP_AUDIO_PLAY_CATALOG_TYPE,
      data: audio_play_catalog
   };
};

export default AppAudioPlayCatalogDataAction;


