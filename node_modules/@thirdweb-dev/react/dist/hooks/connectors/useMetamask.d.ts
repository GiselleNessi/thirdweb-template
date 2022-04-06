/**
 * Convienience hook for connecting to a metamask (or any injected) wallet
 * @returns a function that will prompt the user to connect their metamask wallet
 * @public
 */
export declare function useMetamask(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
