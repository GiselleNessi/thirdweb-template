import { z } from "zod";
/**
 * @internal
 */
export declare const OptionalPropertiesInput: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodObject<{
    key: z.ZodString;
    value: z.ZodUnion<[z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>;
}, "strip", z.ZodTypeAny, {
    value?: any;
    key: string;
}, {
    value?: any;
    key: string;
}>, "many">, {
    value?: any;
    key: string;
}[], {
    value?: any;
    key: string;
}[]>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>>]>>, {
    value?: any;
    key: string;
}[] | Record<string, any> | undefined, {
    value?: any;
    key: string;
}[] | Record<string, any> | undefined>, Record<string, any> | undefined, {
    value?: any;
    key: string;
}[] | Record<string, any> | undefined>;
/**
 * @internal
 */
export declare const OptionalPropertiesOutput: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>>;
