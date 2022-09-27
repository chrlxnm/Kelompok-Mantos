import * as https from 'https';

import { ERROR_MODAL, IS_SUCCESS, JWT_EXPIRED, SESSION_EXPIRED, USER, USER_ADMIN } from "./constants";
import {
  URL_ADD_COMPANY,
  URL_GET_OTP,
  URL_GET_OTP_MANAGEMENT,
  URL_LOGOUT_X,
  URL_PORT,
  URL_PREFIX
} from "./paths";
import { clearUserFootPrint, parseJwt, replaceAccessToken } from "../helpers/utils";
import { hideModal, requestDone, requesting, showModal } from "../redux/actions/generalActions";

import Cookies from "js-cookie";
import { EncryptStorage } from 'encrypt-storage';
import I18n from './i18';
import axios from "axios";
import { errorWithoutPopup } from "./constant/listErrorWithoutPopup";
import http from 'http';
import store from "../redux";
import { urlWithoutLoadingPopup } from "./constant/listUrlWithoutLoadingPopup";

export const encryptStorage = new EncryptStorage('ict1234567', {
  storageType: 'localStorage'
})

let accessRole = encryptStorage.getItem('access_role');

/* function specialErrorMessage(message) {
  let returnedMessage = I18n.t(message);

  if (message && I18n.t(message)) {
    if (message !== SESSION_EXPIRED && I18n.t(message) !== message) {
      const keyComponents = message.split('.');
      const messageTitle = keyComponents[0].toUpperCase();
      const messageCode = keyComponents[2];
      returnedMessage = `${messageTitle}-${messageCode}: ${I18n.t(message)}`
    } else {
      returnedMessage = message
    }
  }

  return returnedMessage;
} */

function closeModal() {
  store.dispatch(hideModal());
}

function handleError(error) {
  if (error.response) {
    const { message, business } = error?.response?.data
    if (business) {
      if (message && message !== null) {
        if (errorWithoutPopup.find(item => item === message) === undefined) {
          if (message !== SESSION_EXPIRED) {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: I18n.t("lang.error.title"),
                message: I18n.t(message),
                onConfirm: () => {
                  closeModal()
                }
              })
            );
          } else {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: I18n.t("lang.error.title"),
                message: I18n.t(message),
                onConfirm: () => {
                  clearUserFootPrint();
                  window.location.reload();
                  closeModal()
                }
              })
            );
          }
        }
      } else {
        store.dispatch(
          
          showModal({
            type: ERROR_MODAL,
            title: I18n.t("lang.error.title"),
            message: accessRole === USER ? I18n.t("lang.user.general.error") : I18n.t("lang.general.error"),
            onConfirm: () => {
              closeModal()
            }
          })
        );
      }
    } else {
      if (message && message !== null) {
        if (errorWithoutPopup.find(item => item === message) === undefined) {
          if (message !== SESSION_EXPIRED) {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: I18n.t("lang.error.title"),
                message: I18n.t(message),
                onConfirm: () => {
                  closeModal()
                }
              })
            );
          } else {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: I18n.t("lang.error.title"),
                message: I18n.t(message),
                onConfirm: () => {
                  clearUserFootPrint();
                  window.location.reload();
                  closeModal()
                }
              })
            );
          }
        }
      } else {
        store.dispatch(
          
          showModal({
            type: ERROR_MODAL,
            title: I18n.t("lang.error.title"),
            message: accessRole === USER ? I18n.t("lang.user.general.error") : I18n.t("lang.general.error"),
            onConfirm: () => {
              closeModal()
            }
          })
        );
      }
    }
  } else {
      store.dispatch(
        
        showModal({
          type: ERROR_MODAL,
          title: I18n.t("lang.error.title"),
          message: accessRole === USER ? I18n.t("lang.user.general.error") : I18n.t("lang.general.error"),
          onConfirm: () => {
            closeModal()
          }
        })
      );
    
  }
}

export const AxiosHitServices = axios.create({
  baseURL: URL_PREFIX + URL_PORT,
  timeout: 60000,
  httpsAgent: new https.Agent({
    rejectUnauthorized:false
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})

Object.setPrototypeOf(AxiosHitServices, axios);

AxiosHitServices.interceptors.request.use(
  (conf) => {
    let loginToken = encryptStorage.getItem('loginToken');
    if (conf.url.includes('login')) {
      conf.headers.Authorization = null;
    } else {
      conf.headers.Authorization = loginToken;
    } 
    if(urlWithoutLoadingPopup.find(e => e === conf.url) === undefined) {
    //   store.dispatch(requesting())
    }
    return conf ;
  },
  (error) => {
    // store.dispatch(requestDone());
    return Promise.reject(error) ;
  }
)

AxiosHitServices.interceptors.response.use(
  (response) => {
    // store.dispatch(requestDone());
    replaceAccessToken(response)
    return response;
  },
  (error) => {
    // store.dispatch(requestDone());
    switch (error?.response?.status) {
      case 401:
        store.dispatch(
          
          showModal({
            type: ERROR_MODAL,
            title: I18n.t("lang.error.title"),
            message: I18n.t(SESSION_EXPIRED),
            onConfirm: () => {
              clearUserFootPrint();
              window.location.reload();
              closeModal()
            }
          })
        );
        break;
      default:
        handleError(error);
        break;
    }
    return Promise.reject(error);
  }
)