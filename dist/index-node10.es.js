import { useMemo } from 'react';
import { useIntl } from 'react-intl';

function useFormattedMessage(descriptor, values, deps = []) {
  const intl = useIntl();
  return useMemo(() => {
    return intl.formatMessage(descriptor, values); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intl, descriptor, ...deps]);
}

export { useFormattedMessage };
//# sourceMappingURL=index-node10.es.js.map
