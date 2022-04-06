/**
 * Convienience hook for connecting to a wallet via WalletConnect
 * @returns a function that will prompt the user to connect their wallet via WalletConnect
 * @public
 */
export declare function useWalletConnect(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
