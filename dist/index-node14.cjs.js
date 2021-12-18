'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const react = require('react');
const reactIntl = require('react-intl');

function useFormattedMessage(descriptor, values, deps = []) {
  const intl = reactIntl.useIntl();
  return react.useMemo(() => {
    return intl.formatMessage(descriptor, values); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intl, descriptor, ...deps]);
}

exports.useFormattedMessage = useFormattedMessage;
//# sourceMappingURL=index-node14.cjs.js.map
