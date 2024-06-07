import type { IntlShape } from "react-intl";
interface UseIntlFormatters {
    formatMessage: IntlShape["formatMessage"];
    formatDate: (value: FormatDateParameters[0], { format, timeZone }: UseFormattedDateOptions) => ReturnType<IntlShape["formatDate"]>;
    formatTime: (value: FormatDateParameters[0], { format, timeZone }: UseFormattedTimeOptions) => ReturnType<IntlShape["formatTime"]>;
}
export declare function useIntlFormatters(): UseIntlFormatters;
type FormatMessageParameters = Parameters<IntlShape["formatMessage"]>;
export declare function useFormattedMessage(descriptor: FormatMessageParameters[0]): string;
export declare function useFormattedMessage(descriptor: FormatMessageParameters[0], values: FormatMessageParameters[1], deps: unknown[]): NonNullable<ReturnType<IntlShape["formatMessage"]>>;
type IntlDateFormat = string;
type FormatDateParameters = Parameters<IntlShape["formatDate"]>;
export interface UseFormattedDateOptions {
    format: IntlDateFormat;
    timeZone?: string;
}
export declare function useFormattedDate(value: FormatDateParameters[0], { format, timeZone }: UseFormattedDateOptions): ReturnType<IntlShape["formatDate"]>;
type IntlTimeFormat = string;
export interface UseFormattedTimeOptions {
    format: IntlTimeFormat;
    timeZone?: string;
}
export declare function useFormattedTime(value: FormatDateParameters[0], { format, timeZone }: UseFormattedTimeOptions): ReturnType<IntlShape["formatTime"]>;
export {};
//# sourceMappingURL=hooks.d.ts.map