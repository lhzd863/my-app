import FIELD_TAG_DATA_TYPE from "../types/FieldTagDataType.js";
import FIELD_TYPE_DATA_TYPE from "../types/FieldTypeDataType.js";
import FIELD_CN_NAME_DATA_TYPE from "../types/FieldCnNameDataType.js";
import FIELD_EN_NAME_DATA_TYPE from "../types/FieldEnNameDataType.js";
import FIELD_TARGET_TEXT_DATA_TYPE from "../types/FieldTargetTextDataType.js";
import FIELD_SOURCE_TEXT_DATA_TYPE from "../types/FieldSourceTextDataType.js";

export const FieldCnNameDataAction = (field_cnname)=> {
   return {
      type: FIELD_CN_NAME_DATA_TYPE,
      data: field_cnname
   };
};

export const FieldEnNameDataAction = (field_enname)=> {
   return {
      type: FIELD_EN_NAME_DATA_TYPE,
      data: field_enname
   };
};

export const FieldTypeDataAction = (field_type)=> {
   return {
      type: FIELD_TYPE_DATA_TYPE,
      data: field_type
   };
};

export const FieldTagDataAction = (field_tag)=> {
   return {
      type: FIELD_TAG_DATA_TYPE,
      data: field_tag
   };
};

export const FieldTargetTextDataAction = (field_target_text)=> {
   return {
      type: FIELD_TARGET_TEXT_DATA_TYPE,
      data: field_target_text
   };
};

export const FieldSourceTextDataAction = (field_source_text)=> {
   return {
      type: FIELD_SOURCE_TEXT_DATA_TYPE,
      data: field_source_text
   };
};



