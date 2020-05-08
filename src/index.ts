import { useMemo } from 'react';
import { IntlShape, useIntl } from 'react-intl';

type FormatMessageParameters = Parameters<IntlShape['formatMessage']>;
type Descriptor = FormatMessageParameters[0];
type Values = FormatMessageParameters[1];
type Result = ReturnType<IntlShape['formatMessage']>;

export function useFormattedMessage(
  descriptor: FormatMessageParameters[0],
): string;
export function useFormattedMessage(
  descriptor: Descriptor,
  values: Values,
  deps: any[],
): Result;
export function useFormattedMessage(
  descriptor: Descriptor,
  values?: Values,
  deps: any[] = [],
): Result {
  const intl = useIntl();
  return useMemo((): Result => {
    return intl.formatMessage(descriptor, values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [intl, descriptor, ...deps]);
}
