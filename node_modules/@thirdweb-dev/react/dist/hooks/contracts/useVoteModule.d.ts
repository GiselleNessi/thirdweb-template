import { Vote } from "@thirdweb-dev/sdk";
/**
 * Returns a Vote contract instance
 * @param contractAddress - the address of the Vote contract, found in your thirdweb dashboard
 * @public
 */
export declare function useVote(contractAddress?: string): Vote | undefined;
