/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import * as deps from '../../deps';
import Form from './Form';

export default () => {
  const RootContainer = deps.elements.RootContainer;
  return (
    <RootContainer mobilePreview>
      <h1 className="title">Push Notifications: OneSignal</h1>
      <hr />
      <Form />
    </RootContainer>
  );
};
