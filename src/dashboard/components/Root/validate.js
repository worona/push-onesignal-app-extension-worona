export const messages = {
  required: 'Required',
  invalidAppId: 'Invalid App ID. It should be something like eee098f0-2f08-4d3a-8f02-bcf2cb85ba61',
};

const regexps = {
  appId: /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/,
};

export default values => {
  const errors = {};
  if (values) {
    if (!values.appId) {
      errors.appId = messages.required;
    } else if (!regexps.appId.test(values.appId)) {
      errors.appId = messages.invalidAppId;
    }
  }
  return errors;
};
