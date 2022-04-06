import { IThirdwebPrimarySale } from "@thirdweb-dev/contracts";
import { ContractWrapper } from "./contract-wrapper";
import { TransactionResult } from "../types";
/**
 * Handles primary sales recipients for a Contract
 * @public
 */
export declare class ContractPrimarySale<TContract extends IThirdwebPrimarySale> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Get the primary sale recipient.
     * @returns the wallet address.
     */
    getRecipient(): Promise<string>;
    /**
     * Set the primary sale recipient
     * @param recipient - the wallet address
     */
    setRecipient(recipient: string): Promise<TransactionResult>;
}
