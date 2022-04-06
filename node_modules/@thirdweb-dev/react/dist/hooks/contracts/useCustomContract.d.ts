import { ChainId } from "@thirdweb-dev/sdk";
/**
 * @internal
 * @param contractAddress - the contract address
 * @param abi - the contract abi
 * @returns the instance of the module for the given type and address
 */
export declare function useUnstableCustomContract(contractAddress?: string, chainId?: ChainId, abi?: any): import("swr").SWRResponse<import("@thirdweb-dev/sdk").CustomContract | import("@thirdweb-dev/sdk").ValidContractInstance | undefined, any>;
