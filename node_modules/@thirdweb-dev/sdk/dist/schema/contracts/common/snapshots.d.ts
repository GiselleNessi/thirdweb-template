import { z } from "zod";
/**
 * @internal
 */
export declare const MerkleSchema: z.ZodObject<{
    merkle: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    merkle: Record<string, string>;
}, {
    merkle?: Record<string, string> | undefined;
}>;
/**
 * @internal
 */
export declare const SnapshotAddress: z.ZodObject<{
    address: z.ZodString;
    maxClaimable: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    address: string;
    maxClaimable: number;
}, {
    maxClaimable?: number | undefined;
    address: string;
}>;
/**
 * @internal
 */
export declare const SnapshotInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
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
}>, "many">]>;
/**
 * @internal
 */
export declare const SnapshotSchema: z.ZodObject<{
    /**
     * The merkle root
     */
    merkleRoot: z.ZodString;
    claims: z.ZodArray<z.ZodObject<z.extendShape<{
        address: z.ZodString;
        maxClaimable: z.ZodDefault<z.ZodNumber>;
    }, {
        proof: z.ZodArray<z.ZodString, "many">;
    }>, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: number;
        proof: string[];
    }, {
        maxClaimable?: number | undefined;
        address: string;
        proof: string[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    claims: {
        address: string;
        maxClaimable: number;
        proof: string[];
    }[];
}, {
    merkleRoot: string;
    claims: {
        maxClaimable?: number | undefined;
        address: string;
        proof: string[];
    }[];
}>;
/**
 * @internal
 */
export declare const SnapshotInfoSchema: z.ZodObject<{
    merkleRoot: z.ZodString;
    snapshotUri: z.ZodString;
    snapshot: z.ZodObject<{
        /**
         * The merkle root
         */
        merkleRoot: z.ZodString;
        claims: z.ZodArray<z.ZodObject<z.extendShape<{
            address: z.ZodString;
            maxClaimable: z.ZodDefault<z.ZodNumber>;
        }, {
            proof: z.ZodArray<z.ZodString, "many">;
        }>, "strip", z.ZodTypeAny, {
            address: string;
            maxClaimable: number;
            proof: string[];
        }, {
            maxClaimable?: number | undefined;
            address: string;
            proof: string[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        merkleRoot: string;
        claims: {
            address: string;
            maxClaimable: number;
            proof: string[];
        }[];
    }, {
        merkleRoot: string;
        claims: {
            maxClaimable?: number | undefined;
            address: string;
            proof: string[];
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    snapshotUri: string;
    snapshot: {
        merkleRoot: string;
        claims: {
            address: string;
            maxClaimable: number;
            proof: string[];
        }[];
    };
}, {
    merkleRoot: string;
    snapshotUri: string;
    snapshot: {
        merkleRoot: string;
        claims: {
            maxClaimable?: number | undefined;
            address: string;
            proof: string[];
        }[];
    };
}>;
