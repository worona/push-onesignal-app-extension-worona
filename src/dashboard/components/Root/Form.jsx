/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { flow } from 'lodash/fp';
import { reduxForm, Field } from 'redux-form';
import validate from './validate';
import * as deps from '../../deps';

const Form = ({ handleSubmit, pristine, siteId, waiting, invalid, anyTouched }) => (
  <form
    onSubmit={handleSubmit((values, dispatch) =>
      dispatch(
        deps.actions.saveSettingsRequested(values, {
          siteId,
          name: 'push-onesignal-app-extension-worona',
        }),
      ))}
  >
    <Field
      name="appId"
      label="OneSignal App ID"
      component={deps.elements.Input}
      type="text"
      size="medium"
      className="is-medium"
    />
    <br />
    <deps.elements.Button
      color="primary"
      size="large"
      type="submit"
      disabled={waiting || pristine || (invalid && anyTouched)}
      loading={waiting}
    >
      Save
    </deps.elements.Button>
    <hr />
    <article className="message is-primary">
      <div className="message-header">
        <p>
          Where do I find my OneSignal App ID?
        </p>
      </div>
      <div className="message-body">
        Follow our documentation to in our docs
      </div>
    </article>
  </form>
);
Form.propTypes = {
  handleSubmit: React.PropTypes.func.isRequired,
  waiting: React.PropTypes.bool,
  siteId: React.PropTypes.string,
  pristine: React.PropTypes.bool,
  invalid: React.PropTypes.bool,
  anyTouched: React.PropTypes.bool,
  initialValues: React.PropTypes.shape({
    appId: React.PropTypes.string,
  }),
};

const mapStateToFormProps = state => ({
  initialValues: {
    appId: deps.selectorCreators.getSetting('pushOnesignal', 'appId')(state),
  },
  waiting: deps.selectors.getSavingSettings(state) === 'push-onesignal-app-extension-worona',
});

export default flow(
  reduxForm({
    form: 'PushOnesignalForm',
    getFormState: state => state.theme.reduxForm,
    enableReinitialize: true,
    validate,
  }),
  connect(mapStateToFormProps),
)(Form);
