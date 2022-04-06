import { TWRegistry } from "@thirdweb-dev/contracts";
import { SDKOptions } from "../../schema/sdk-options";
import { NetworkOrSignerOrProvider } from "../types";
import { ContractWrapper } from "./contract-wrapper";
/**
 * @internal
 */
export declare class ContractRegistry extends ContractWrapper<TWRegistry> {
    constructor(registryAddress: string, network: NetworkOrSignerOrProvider, options?: SDKOptions);
    getContractAddresses(walletAddress: string): Promise<string[]>;
}
