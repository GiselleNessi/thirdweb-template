import { BaseContract } from "ethers";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { Interface } from "@ethersproject/abi";
/**
 * Type guards a contract to a known type if it matches the corresponding interface
 * @internal
 * @param contractWrapper
 * @param interfaceToMatch
 */
export declare function implementsInterface<C extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, interfaceToMatch: Interface): contractWrapper is ContractWrapper<C>;
