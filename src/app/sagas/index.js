/* eslint-disable no-undef */
import { fork, select } from 'redux-saga/effects';
import * as deps from '../deps';

function* initOnesignal() {
  const appId = yield select(deps.selectorCreators.getSetting('pushOnesignal', 'appId'));
  if (appId && appId !== '') {
    window.plugins.OneSignal
    .startInit(appId)
    .handleNotificationOpened()
    .endInit();
  }
}

export default function* pushOnesignalSagas() {
  if (window.plugins && window.plugins.OneSignal) yield fork(initOnesignal);
}
