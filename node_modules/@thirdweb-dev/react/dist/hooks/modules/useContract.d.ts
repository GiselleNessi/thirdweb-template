import { ContractForContractType, ContractType } from "@thirdweb-dev/sdk";
/**
 * @internal
 * @param contractType - the module type
 * @param contractAddress - the module address
 * @returns the instance of the module for the given type and address
 */
export declare function useContract<TContractType extends ContractType>(contractType: TContractType, contractAddress?: string): ContractForContractType<TContractType> | undefined;
