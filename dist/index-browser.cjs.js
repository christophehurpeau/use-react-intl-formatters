'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var reactIntl = require('react-intl');

function useFormattedMessage(descriptor, values, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var intl = reactIntl.useIntl();
  return react.useMemo(function () {
    return intl.formatMessage(descriptor, values); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intl, descriptor].concat(deps));
}

exports.useFormattedMessage = useFormattedMessage;
//# sourceMappingURL=index-browser.cjs.js.map
