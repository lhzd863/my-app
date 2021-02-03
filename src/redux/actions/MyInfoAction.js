import {MY_USERNAME,MY_USERID,MY_ALIAS,MY_MAIL } from "../types/MyInfoType.js";

export const updUserNameAction = (username)=> {
   return {
      type: MY_USERNAME,
      data: username
   };
};


export const updUserIdAction = (userid)=> {
   return {
      type: MY_USERID,
      data: userid
   };
};

export const updAliasAction = (alias)=> {
   return {
      type: MY_ALIAS,
      data: alias
   };
};

export const updMailAction = (mail)=> {
   return {
      type: MY_MAIL,
      data: mail
   };
};

