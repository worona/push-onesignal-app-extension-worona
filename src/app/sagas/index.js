import { fork } from 'redux-saga/effects';

function* initOnesignal() {
  const appId = yield select(deps.selectorCreators.getSetting('pushOnesignal', 'appId'));
  window.plugins.OneSignal
  .startInit(appId)
  .handleNotificationOpened(function(jsonData) {
    alert("Notification opened:\n" + JSON.stringify(jsonData));
    console.log('didOpenRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
  })
  .endInit();
}

export default function* pushOnesignalSagas() {
  yield [
    fork(initOnesignal),
  ];
}
