/* eslint-disable no-undef */
import { fork, select } from 'redux-saga/effects';
import * as deps from '../deps';

function* initOnesignal() {
  const appId = yield select(deps.selectorCreators.getSetting('pushOnesignal', 'appId'));
  window.plugins.OneSignal
    .startInit(appId)
    .handleNotificationOpened(jsonData => {
      alert(`Notification opened:\n${JSON.stringify(jsonData)}`);
      console.log(`didOpenRemoteNotificationCallBack: ${JSON.stringify(jsonData)}`);
    })
    .endInit();
}

export default function* pushOnesignalSagas() {
  if (window.plugins && window.plugins.OneSignal) yield fork(initOnesignal);
}
