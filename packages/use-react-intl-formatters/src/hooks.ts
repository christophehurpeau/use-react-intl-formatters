import { useCallback, useMemo } from 'react';
import type { IntlShape } from 'react-intl';
import { useIntl } from 'react-intl';

/* formatters */

interface UseIntlFormatters {
  formatMessage: IntlShape['formatMessage'];
  formatDate: (
    value: FormatDateParameters[0],
    { format, timeZone }: UseFormattedDateOptions,
  ) => ReturnType<IntlShape['formatDate']>;
  formatTime: (
    value: FormatDateParameters[0],
    { format, timeZone }: UseFormattedTimeOptions,
  ) => ReturnType<IntlShape['formatTime']>;
}

export function useIntlFormatters(): UseIntlFormatters {
  const intl = useIntl();

  const formatMessage = useCallback<UseIntlFormatters['formatMessage']>(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    (descriptor: any, values: any) => intl.formatMessage(descriptor, values),
    [intl],
  );
  const formatDate = useCallback<UseIntlFormatters['formatDate']>(
    (value, { format, timeZone }) =>
      intl.formatDate(value, { format, timeZone }),
    [intl],
  );
  const formatTime = useCallback<UseIntlFormatters['formatTime']>(
    (value, { format, timeZone }) =>
      intl.formatTime(value, { format, timeZone }),
    [intl],
  );

  return { formatMessage, formatDate, formatTime };
}

/* message */

type FormatMessageParameters = Parameters<IntlShape['formatMessage']>;

export function useFormattedMessage(
  descriptor: FormatMessageParameters[0],
): string;
export function useFormattedMessage(
  descriptor: FormatMessageParameters[0],
  values: FormatMessageParameters[1],
  deps: unknown[],
): NonNullable<ReturnType<IntlShape['formatMessage']>>;
export function useFormattedMessage(
  descriptor: FormatMessageParameters[0],
  values?: FormatMessageParameters[1],
  deps: unknown[] = [],
): ReturnType<IntlShape['formatMessage']> {
  const intlFormatters = useIntlFormatters();
  return useMemo(() => {
    return intlFormatters.formatMessage(descriptor, values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descriptor, ...deps]);
}

/* date */

type IntlDateFormat = string;
type FormatDateParameters = Parameters<IntlShape['formatDate']>;

export interface UseFormattedDateOptions {
  format: IntlDateFormat;
  timeZone?: string;
}

export function useFormattedDate(
  value: FormatDateParameters[0],
  { format, timeZone }: UseFormattedDateOptions,
): ReturnType<IntlShape['formatDate']> {
  const { formatDate } = useIntlFormatters();

  return useMemo(() => {
    return formatDate(value, { format, timeZone });
  }, [formatDate, value, format, timeZone]);
}

/* time */

type IntlTimeFormat = string;
export interface UseFormattedTimeOptions {
  format: IntlTimeFormat;
  timeZone?: string;
}

export function useFormattedTime(
  value: FormatDateParameters[0],
  { format, timeZone }: UseFormattedTimeOptions,
): ReturnType<IntlShape['formatTime']> {
  const { formatTime } = useIntlFormatters();

  return useMemo(() => {
    return formatTime(value, { format, timeZone });
  }, [formatTime, value, format, timeZone]);
}
