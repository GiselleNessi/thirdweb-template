import { z } from "zod";
import { BigNumber } from "ethers";
/**
 * @internal
 */
export declare const ClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: number;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        maxClaimable: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: number;
    }, {
        maxClaimable?: number | undefined;
        address: string;
    }>, "many">]>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: number;
    }[] | undefined;
    startTime: BigNumber;
    currencyAddress: string;
    price: string;
    maxQuantity: string;
    quantityLimitPerTransaction: string;
    waitInSeconds: string;
    merkleRootHash: string | number[];
}, {
    snapshot?: string[] | {
        maxClaimable?: number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | bigint | BigNumber | undefined;
    quantityLimitPerTransaction?: string | number | bigint | BigNumber | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionInputArray: z.ZodArray<z.ZodObject<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: number;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        maxClaimable: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: number;
    }, {
        maxClaimable?: number | undefined;
        address: string;
    }>, "many">]>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: number;
    }[] | undefined;
    startTime: BigNumber;
    currencyAddress: string;
    price: string;
    maxQuantity: string;
    quantityLimitPerTransaction: string;
    waitInSeconds: string;
    merkleRootHash: string | number[];
}, {
    snapshot?: string[] | {
        maxClaimable?: number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | bigint | BigNumber | undefined;
    quantityLimitPerTransaction?: string | number | bigint | BigNumber | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>, "many">;
/**
 * @internal
 */
export declare const PartialClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>>;
    currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    price: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>>;
    maxQuantity: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>>;
    quantityLimitPerTransaction: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>>;
    waitInSeconds: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>>;
    merkleRootHash: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>>;
    snapshot: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: number;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        maxClaimable: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: number;
    }, {
        maxClaimable?: number | undefined;
        address: string;
    }>, "many">]>>>;
}, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: number;
    }[] | undefined;
    startTime?: BigNumber | undefined;
    currencyAddress?: string | undefined;
    price?: string | undefined;
    maxQuantity?: string | undefined;
    quantityLimitPerTransaction?: string | undefined;
    waitInSeconds?: string | undefined;
    merkleRootHash?: string | number[] | undefined;
}, {
    snapshot?: string[] | {
        maxClaimable?: number | undefined;
        address: string;
    }[] | undefined;
    startTime?: Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxQuantity?: string | number | bigint | BigNumber | undefined;
    quantityLimitPerTransaction?: string | number | bigint | BigNumber | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionOutputSchema: z.ZodObject<z.extendShape<{
    startTime: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxQuantity: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    quantityLimitPerTransaction: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: number;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        maxClaimable: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: number;
    }, {
        maxClaimable?: number | undefined;
        address: string;
    }>, "many">]>>;
}, {
    availableSupply: z.ZodDefault<z.ZodString>;
    currencyMetadata: z.ZodDefault<z.ZodObject<z.extendShape<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, {
        value: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
        displayValue: z.ZodString;
    }>, "strip", z.ZodTypeAny, {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }, {
        symbol: string;
        value: string | number | bigint | BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }>>;
    price: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    maxQuantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    quantityLimitPerTransaction: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    waitInSeconds: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    startTime: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, Date, string | number | bigint | BigNumber>;
}>, "strip", z.ZodTypeAny, {
    snapshot?: {
        address: string;
        maxClaimable: number;
    }[] | undefined;
    startTime: Date;
    currencyAddress: string;
    price: BigNumber;
    maxQuantity: BigNumber;
    quantityLimitPerTransaction: BigNumber;
    waitInSeconds: BigNumber;
    merkleRootHash: string | number[];
    availableSupply: string;
    currencyMetadata: {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
}, {
    snapshot?: string[] | {
        maxClaimable?: number | undefined;
        address: string;
    }[] | undefined;
    currencyAddress?: string | undefined;
    merkleRootHash?: string | number[] | undefined;
    availableSupply?: string | undefined;
    currencyMetadata?: {
        symbol: string;
        value: string | number | bigint | BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    } | undefined;
    startTime: string | number | bigint | BigNumber;
    price: string | number | bigint | BigNumber;
    maxQuantity: string | number | bigint | BigNumber;
    quantityLimitPerTransaction: string | number | bigint | BigNumber;
    waitInSeconds: string | number | bigint | BigNumber;
}>;
