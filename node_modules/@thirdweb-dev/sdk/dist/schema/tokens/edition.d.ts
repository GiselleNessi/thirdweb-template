import { z } from "zod";
/**
 * @internal
 */
export declare const EditionMetadataOutputSchema: z.ZodObject<{
    supply: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    metadata: z.ZodObject<z.extendShape<z.extendShape<{
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
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: import("ethers").BigNumber;
        uri: string;
    }, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: string | number | bigint | import("ethers").BigNumber;
        uri: string;
    }>;
}, "strip", z.ZodTypeAny, {
    metadata: {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: import("ethers").BigNumber;
        uri: string;
    };
    supply: import("ethers").BigNumber;
}, {
    metadata: {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: string | number | bigint | import("ethers").BigNumber;
        uri: string;
    };
    supply: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const EditionMetadataWithOwnerOutputSchema: z.ZodObject<z.extendShape<{
    supply: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    metadata: z.ZodObject<z.extendShape<z.extendShape<{
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
        properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: import("ethers").BigNumber;
        uri: string;
    }, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: string | number | bigint | import("ethers").BigNumber;
        uri: string;
    }>;
}, {
    owner: z.ZodString;
    quantityOwned: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}>, "strip", z.ZodTypeAny, {
    metadata: {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: import("ethers").BigNumber;
        uri: string;
    };
    owner: string;
    supply: import("ethers").BigNumber;
    quantityOwned: import("ethers").BigNumber;
}, {
    metadata: {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: string | undefined;
        external_url?: string | undefined;
        animation_url?: string | undefined;
        properties?: Record<string, import("../..").Json> | undefined;
        name: string;
        id: string | number | bigint | import("ethers").BigNumber;
        uri: string;
    };
    owner: string;
    supply: string | number | bigint | import("ethers").BigNumber;
    quantityOwned: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const EditionMetadataInputSchema: z.ZodObject<{
    supply: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadata: z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodUnion<[z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>;
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
        }[]>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>>]>>, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined>, Record<string, any> | undefined, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, any> | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
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
}, "strip", z.ZodTypeAny, {
    metadata: {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, any> | undefined;
        name: string;
    };
    supply: string;
}, {
    metadata: {
        [x: string]: import("../..").Json;
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
    };
    supply: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @internal
 */
export declare const EditionMetadataInputOrUriSchema: z.ZodObject<{
    supply: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadata: z.ZodUnion<[z.ZodObject<z.extendShape<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        external_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
    }, {
        animation_url: z.ZodOptional<z.ZodUnion<[z.ZodTypeAny, z.ZodString]>>;
        background_color: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>;
        properties: z.ZodEffects<z.ZodEffects<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodObject<{
            key: z.ZodString;
            value: z.ZodUnion<[z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>;
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
        }[]>, z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>, z.ZodUnion<[z.ZodTypeAny, z.ZodString]>]>>]>>, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined>, Record<string, any> | undefined, {
            value?: any;
            key: string;
        }[] | Record<string, any> | undefined>;
    }>, "strip", z.ZodLazy<z.ZodType<import("../..").Json, z.ZodTypeDef, import("../..").Json>>, {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, any> | undefined;
        name: string;
    }, {
        [x: string]: import("../..").Json;
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
}, "strip", z.ZodTypeAny, {
    metadata: string | {
        [x: string]: import("../..").Json;
        description?: string | undefined;
        image?: any;
        external_url?: any;
        animation_url?: any;
        background_color?: string | undefined;
        properties?: Record<string, any> | undefined;
        name: string;
    };
    supply: string;
}, {
    metadata: string | {
        [x: string]: import("../..").Json;
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
    };
    supply: string | number | bigint | import("ethers").BigNumber;
}>;
/**
 * @public
 */
export declare type EditionMetadata = z.output<typeof EditionMetadataOutputSchema>;
/**
 * @public
 */
export declare type EditionMetadataOwner = z.output<typeof EditionMetadataWithOwnerOutputSchema>;
/**
 * @public
 */
export declare type EditionMetadataInput = z.input<typeof EditionMetadataInputSchema>;
/**
 * @public
 */
export declare type EditionMetadataOrUri = z.input<typeof EditionMetadataInputOrUriSchema>;
