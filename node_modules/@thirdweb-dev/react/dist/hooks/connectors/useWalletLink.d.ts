/**
 * Convienience hook for connecting to a wallet via WalletLink (coinbase wallet)
 * @returns a function that will prompt the user to connect their wallet via WalletLink (coinbase wallet)
 * @internal
 */
export declare function useWalletLink(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
/**
 * Convienience hook for connecting to a wallet via Coinbase Wallet
 * @returns a function that will prompt the user to connect their wallet via Coinbase Wallet
 * @public
 */
export declare function useCoinbaseWallet(): () => Promise<{
    data?: import("wagmi-core").ConnectorData<any> | undefined;
    error?: Error | undefined;
}>;
