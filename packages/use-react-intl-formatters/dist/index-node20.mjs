import { useCallback, useMemo } from 'react';
import { useIntl } from 'react-intl';

/* formatters */

function useIntlFormatters() {
  const intl = useIntl();
  const formatMessage = useCallback(
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  (descriptor, values) => intl.formatMessage(descriptor, values), [intl]);
  const formatDate = useCallback((value, {
    format,
    timeZone
  }) => intl.formatDate(value, {
    format,
    timeZone
  }), [intl]);
  const formatTime = useCallback((value, {
    format,
    timeZone
  }) => intl.formatTime(value, {
    format,
    timeZone
  }), [intl]);
  return {
    formatMessage,
    formatDate,
    formatTime
  };
}

/* message */

function useFormattedMessage(descriptor, values, deps = []) {
  const intlFormatters = useIntlFormatters();
  return useMemo(() => {
    return intlFormatters.formatMessage(descriptor, values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptor, ...deps]);
}

/* date */

function useFormattedDate(value, {
  format,
  timeZone
}) {
  const {
    formatDate
  } = useIntlFormatters();
  return useMemo(() => {
    return formatDate(value, {
      format,
      timeZone
    });
  }, [formatDate, value, format, timeZone]);
}

/* time */

function useFormattedTime(value, {
  format,
  timeZone
}) {
  const {
    formatTime
  } = useIntlFormatters();
  return useMemo(() => {
    return formatTime(value, {
      format,
      timeZone
    });
  }, [formatTime, value, format, timeZone]);
}

export { useFormattedDate, useFormattedMessage, useFormattedTime, useIntlFormatters };
//# sourceMappingURL=index-node20.mjs.map
