import { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';

function useIntlFormatters() {
  const intl = useIntl();
  const formatMessage = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    (descriptor, values) => intl.formatMessage(descriptor, values),
    [intl]
  );
  const formatDate = useCallback(
    (value, { format, timeZone }) => intl.formatDate(value, { format, timeZone }),
    [intl]
  );
  const formatTime = useCallback(
    (value, { format, timeZone }) => intl.formatTime(value, { format, timeZone }),
    [intl]
  );
  return { formatMessage, formatDate, formatTime };
}
function useFormattedMessage(descriptor, values, deps = []) {
  const intlFormatters = useIntlFormatters();
  return useMemo(() => {
    return intlFormatters.formatMessage(descriptor, values);
  }, [descriptor, ...deps]);
}
function useFormattedDate(value, { format, timeZone }) {
  const { formatDate } = useIntlFormatters();
  return useMemo(() => {
    return formatDate(value, { format, timeZone });
  }, [formatDate, value, format, timeZone]);
}
function useFormattedTime(value, { format, timeZone }) {
  const { formatTime } = useIntlFormatters();
  return useMemo(() => {
    return formatTime(value, { format, timeZone });
  }, [formatTime, value, format, timeZone]);
}

export { useFormattedDate, useFormattedMessage, useFormattedTime, useIntlFormatters };
//# sourceMappingURL=index-node.mjs.map
