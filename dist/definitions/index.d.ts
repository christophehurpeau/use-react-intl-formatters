import type { IntlShape } from 'react-intl';
type FormatMessageParameters = Parameters<IntlShape['formatMessage']>;
type Descriptor = FormatMessageParameters[0];
type Values = FormatMessageParameters[1];
type Result = ReturnType<IntlShape['formatMessage']>;
export declare function useFormattedMessage(descriptor: FormatMessageParameters[0]): string;
export declare function useFormattedMessage(descriptor: Descriptor, values: Values, deps: any[]): Result;
export {};
//# sourceMappingURL=index.d.ts.map