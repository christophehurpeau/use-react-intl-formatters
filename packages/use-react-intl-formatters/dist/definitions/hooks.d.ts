import type { FormatXMLElementFn, Options as IntlMessageFormatOptions, PrimitiveType } from "intl-messageformat";
import type { ReactNode } from "react";
import type { IntlShape, MessageDescriptor } from "react-intl";
interface UseIntlFormatters {
    formatMessage(descriptor: MessageDescriptor, values?: Record<string, FormatXMLElementFn<string, string> | PrimitiveType>, opts?: IntlMessageFormatOptions): string;
    formatMessage(descriptor: MessageDescriptor, values?: Record<string, FormatXMLElementFn<string, ReactNode> | PrimitiveType | ReactNode>, opts?: IntlMessageFormatOptions): ReactNode[];
    formatDate: (value: FormatDateParameters[0], { format, timeZone }: UseFormattedDateOptions) => ReturnType<IntlShape["formatDate"]>;
    formatTime: (value: FormatDateParameters[0], { format, timeZone }: UseFormattedTimeOptions) => ReturnType<IntlShape["formatTime"]>;
}
export declare function useIntlFormatters(): UseIntlFormatters;
export declare function useFormattedMessage(descriptor: MessageDescriptor): string;
export declare function useFormattedMessage(descriptor: MessageDescriptor, values?: Record<string, FormatXMLElementFn<string, string> | PrimitiveType>, deps?: unknown[]): string;
export declare function useFormattedMessage(descriptor: MessageDescriptor, values?: Record<string, FormatXMLElementFn<string, ReactNode> | PrimitiveType | ReactNode>, deps?: unknown[]): ReactNode[];
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