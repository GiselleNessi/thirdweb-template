import { ContractWrapper } from "./contract-wrapper";
import { BaseContract } from "ethers";
import { Listener } from "@ethersproject/providers";
/**
 * Listen to Contract events in real time
 * @public
 */
export declare class ContractEvents<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Subscribe to contract events
     * @remarks Add a listener for a particular contract event
     * @example
     * ```javascript
     * contract.events.addListener("TokensMinted", (event) => {
     *   console.log(event);
     * });
     * ```
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the receiver that will be called on every new event
     */
    addListener(eventName: keyof TContract["filters"], listener: (event: Record<string, any>) => void): void;
    /**
     * @public
     * @param eventName - the event name as defined in the contract
     * @param listener - the listener to unregister
     */
    removeListener(eventName: keyof TContract["filters"], listener: Listener): void;
    /**
     * Remove all listeners on this contract
     */
    removeAllListeners(): void;
}
