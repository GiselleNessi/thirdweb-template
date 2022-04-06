import { SharedMediaProps } from "./MediaRenderer";
import { BigNumberish } from "@ethersproject/bignumber";
import { NFTMetadata, NFTMetadataOwner } from "@thirdweb-dev/sdk";
import React from "react";
export interface NftMediaProps extends SharedMediaProps {
    contractAddress: string;
    tokenId: BigNumberish;
}
/**
 * @internal
 */
export declare const Unstable_NftMedia: React.ForwardRefExoticComponent<NftMediaProps & React.RefAttributes<HTMLMediaElement>>;
/**
 *
 * @param contractAddress - the contract address of the NFT contract
 * @param tokenId - the tokenId of the nft
 * @returns the metadata of the nft
 * @internal
 */
export declare function useNftTokenMetadata(contractAddress: string, tokenId: BigNumberish): import("swr").SWRResponse<NFTMetadataOwner | undefined, any>;
/**
 * The props for the {@link ThirdwebNftMedia} component.
 */
export interface ThirdwebNftMediaProps extends SharedMediaProps {
    /**
     * The NFT metadata of the NFT returned by the thirdweb sdk.
     */
    metadata: NFTMetadata;
}
/**
 * Render a nft based on the common metadata returned by the thirdweb sdk.
 */
export declare const ThirdwebNftMedia: React.ForwardRefExoticComponent<ThirdwebNftMediaProps & React.RefAttributes<HTMLMediaElement>>;
