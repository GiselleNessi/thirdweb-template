import { BigNumberish, BytesLike } from "ethers";
import { ClaimCondition, ClaimConditionInput, ClaimVerification } from "../types";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { IStorage } from "../core";
import { IDropClaimCondition } from "@thirdweb-dev/contracts/dist/IDropERC1155";
import { Provider } from "@ethersproject/providers";
/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */
export declare function prepareClaim(quantity: BigNumberish, activeClaimCondition: ClaimCondition, merkleMetadata: Record<string, string>, contractWrapper: ContractWrapper<any>, storage: IStorage, proofs?: BytesLike[]): Promise<ClaimVerification>;
/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
export declare function fetchSnapshot(merkleRoot: string, merkleMetadata: Record<string, string>, storage: IStorage): Promise<{
    address: string;
    maxClaimable: number;
    proof: string[];
}[] | undefined>;
/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */
export declare function updateExsitingClaimConditions(index: number, claimConditionInput: ClaimConditionInput, existingConditions: ClaimCondition[]): ClaimConditionInput[];
/**
 * Fetches the proof for the current signer for a particular wallet.
 *
 * @param merkleRoot - The merkle root of the condition to check.
 * @returns - The proof for the current signer for the specified condition.
 */
export declare function getClaimerProofs(addressToClaim: string, merkleRoot: string, merkleMetadata: Record<string, string>, storage: IStorage): Promise<{
    maxClaimable: number;
    proof: string[];
}>;
/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @internal
 */
export declare function processClaimConditionInputs(claimConditionInputs: ClaimConditionInput[], provider: Provider, storage: IStorage): Promise<{
    snapshotInfos: {
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
    }[];
    sortedConditions: IDropClaimCondition.ClaimConditionStruct[];
}>;
/**
 * Transforms a contract model to local model
 * @param pm
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @internal
 */
export declare function transformResultToClaimCondition(pm: IDropClaimCondition.ClaimConditionStructOutput, provider: Provider, merkleMetadata: Record<string, string>, storage: IStorage): Promise<ClaimCondition>;
