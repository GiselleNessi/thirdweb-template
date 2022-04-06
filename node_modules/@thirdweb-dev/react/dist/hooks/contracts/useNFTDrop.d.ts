import { NFTDrop } from "@thirdweb-dev/sdk";
/**
 * Returns a NFT Drop contract instance
 * @param contractAddress - the address of the NFT Drop contract, found in your thirdweb dashboard
 * @public
 */
export declare function useNFTDrop(contractAddress?: string): NFTDrop | undefined;
