import { z } from "zod";
/**
 * @internal
 */
export declare const CommonTokenInput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    name: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    name: string;
}>;
/**
 * @internal
 */
export declare const CommonTokenOutput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, {
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    uri: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    external_url: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    name: string;
    id: import("ethers").BigNumber;
    uri: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    name: string;
    id: string | number | bigint | import("ethers").BigNumber;
    uri: string;
}>;
/**
 * @internal
 */
export declare const CommonNFTInput: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, {
    animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
    properties: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodObject<{
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
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, any> | undefined;
    name: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: {
        value?: any;
        key: string;
    }[] | Record<string, any> | undefined;
    name: string;
}>;
/**
 * @internal
 */
export declare const NFTInputOrUriSchema: z.ZodUnion<[z.ZodObject<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, {
    animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
    properties: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodObject<{
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
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: Record<string, any> | undefined;
    name: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: any;
    external_url?: any;
    animation_url?: any;
    background_color?: string | undefined;
    properties?: {
        value?: any;
        key: string;
    }[] | Record<string, any> | undefined;
    name: string;
}>, z.ZodString]>;
/**
 * @internal
 */
export declare const CommonNFTOutput: z.ZodObject<z.extendShape<z.extendShape<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
}, {
    id: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    uri: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    external_url: z.ZodOptional<z.ZodString>;
}>, {
    animation_url: z.ZodOptional<z.ZodString>;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>>;
}>, "strip", z.ZodLazy<z.ZodType<import("../../..").Json, z.ZodTypeDef, import("../../..").Json>>, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    animation_url?: string | undefined;
    properties?: Record<string, import("../../..").Json> | undefined;
    name: string;
    id: import("ethers").BigNumber;
    uri: string;
}, {
    [x: string]: import("../../..").Json;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    animation_url?: string | undefined;
    properties?: Record<string, import("../../..").Json> | undefined;
    name: string;
    id: string | number | bigint | import("ethers").BigNumber;
    uri: string;
}>;
/**
 * @public
 */
export declare type NFTMetadataInput = z.input<typeof CommonNFTInput>;
/**
 * @public
 */
export declare type NFTMetadataOrUri = z.input<typeof NFTInputOrUriSchema>;
/**
 * @public
 */
export declare type NFTMetadata = z.output<typeof CommonNFTOutput>;
/**
 * @public
 */
export declare type NFTMetadataOwner = {
    metadata: NFTMetadata;
    owner: string;
};
