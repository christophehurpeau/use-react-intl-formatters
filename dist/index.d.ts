import type { IntlShape } from 'react-intl';
declare type FormatMessageParameters = Parameters<IntlShape['formatMessage']>;
declare type Descriptor = FormatMessageParameters[0];
declare type Values = FormatMessageParameters[1];
declare type Result = ReturnType<IntlShape['formatMessage']>;
export declare function useFormattedMessage(descriptor: FormatMessageParameters[0]): string;
export declare function useFormattedMessage(descriptor: Descriptor, values: Values, deps: any[]): Result;
export {};
//# sourceMappingURL=index.d.ts.map