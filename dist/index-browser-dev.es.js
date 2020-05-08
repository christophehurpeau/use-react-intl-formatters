import { useMemo } from 'react';
import { useIntl } from 'react-intl';

function useFormattedMessage(descriptor, values, deps) {
  if (deps === void 0) {
    deps = [];
  }

  var intl = useIntl();
  return useMemo(function () {
    return intl.formatMessage(descriptor, values); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intl, descriptor].concat(deps));
}

export { useFormattedMessage };
//# sourceMappingURL=index-browser-dev.es.js.map
