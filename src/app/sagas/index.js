import { fork } from 'redux-saga/effects';

function* logSaga() {
  console.log('push onesignal saga running!');
}

export default function* testSagas() {
  yield [
    fork(logSaga),
  ];
}
