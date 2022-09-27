import * as https from 'https';

import { ERROR_MODAL, SESSION_EXPIRED, USER } from "./constants";
import { clearUserFootPrint, replaceAccessToken } from "../helpers/utils";
import { hideModal, requestDone, requesting, showModal } from "../redux/actions/generalActions";

import { EncryptStorage } from 'encrypt-storage';
import {
  URL_PREFIX
} from "./paths";
import axios from "axios";
import { errorWithoutPopup } from "./constant/listErrorWithoutPopup";
import http from 'http';
import store from "../redux";
import { urlWithoutLoadingPopup } from "./constant/listUrlWithoutLoadingPopup";

export const encryptStorage = new EncryptStorage('ict1234567', {
  storageType: 'localStorage'
})

function closeModal() {
  store.dispatch(hideModal());
}

function handleError(error) {
  if (error.response) {
    const { message } = error?.response?.data
      if (message && message !== null) {
        if (errorWithoutPopup.find(item => item === message) === undefined) {
          if (message !== SESSION_EXPIRED) {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: 'ERROR',
                message: message,
                onConfirm: () => {
                  closeModal()
                }
              })
            );
          } else {
            store.dispatch(
              
              showModal({
                type: ERROR_MODAL,
                title: 'ERROR',
                message: message,
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
            title: 'ERROR',
            message: 'Bad Request',
            onConfirm: () => {
              closeModal()
            }
          })
        );
      }
  } else {
      store.dispatch(
        
        showModal({
          type: ERROR_MODAL,
          title: 'ERROR',
          message: 'Bad Request',
          onConfirm: () => {
            closeModal()
          }
        })
      );
    
  }
}

export const AxiosHitServices = axios.create({
  baseURL: URL_PREFIX,
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
            title: 'ERROR',
            message: 'Unauthorized',
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