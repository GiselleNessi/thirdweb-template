import { ContractWrapper } from "./contract-wrapper";
import { DropERC721, TokenERC721 } from "@thirdweb-dev/contracts";
import { BigNumber, BigNumberish } from "ethers";
import { NFTMetadata, NFTMetadataOwner } from "../../schema/tokens/common";
import { QueryAllParams } from "../../types/QueryParams";
import { IStorage } from "../interfaces";
import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { UpdateableNetwork } from "../interfaces/contract";
import { SDKOptions } from "../../schema/sdk-options";
/**
 * Standard ERC721 functions
 * @public
 */
export declare class Erc721<T extends DropERC721 | TokenERC721> implements UpdateableNetwork {
    protected contractWrapper: ContractWrapper<T>;
    protected storage: IStorage;
    protected options: SDKOptions;
    constructor(contractWrapper: ContractWrapper<T>, storage: IStorage, options?: SDKOptions);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkOrSignerOrProvider): void;
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a single NFT Metadata
     *
     * @example
     * ```javascript
     * const nft = await contract.get("0");
     * console.log(nft);
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     */
    get(tokenId: BigNumberish): Promise<NFTMetadataOwner>;
    /**
     * Get All NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.getAll();
     * console.log(nfts);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFTMetadataOwner[]>;
    /**
     * Get the number of NFTs minted
     * @returns the total number of NFTs minted in this contract
     * @public
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get Owned NFTs
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.getOwned(address);
     * console.log(nfts);
     * ```
     *
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getOwned(_address?: string): Promise<NFTMetadataOwner[]>;
    /**
     * Get the current owner of a given NFT within this Contract
     *
     * @param tokenId - the tokenId of the NFT
     * @returns the address of the owner
     */
    ownerOf(tokenId: BigNumberish): Promise<string>;
    /**
     * Get the total supply for this Contract.
     *
     * @returns the total supply
     */
    totalSupply(): Promise<BigNumber>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * // Address of the wallet to check NFT balance
     * const address = "{{wallet_address}}";
     *
     * const balance = await contract.balanceOf(address);
     * console.log(balance);
     * ```
     */
    balanceOf(address: string): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(): Promise<BigNumber>;
    /**
     * Get whether users can transfer NFTs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /**
     * Get whether this wallet has approved transfers from the given operator
     * @param address - the wallet address
     * @param operator - the operator address
     */
    isApproved(address: string, operator: string): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Transfer a single NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to send the NFT to
     * const toAddress = "{{wallet_address}}";
     *
     * // The token ID of the NFT you want to send
     * const tokenId = "0";
     *
     * await contract.transfer(toAddress, tokenId);
     * ```
     */
    transfer(to: string, tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     */
    burn(tokenId: BigNumberish): Promise<TransactionResult>;
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    setApprovalForAll(operator: string, approved: boolean): Promise<TransactionResult>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     */
    protected getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
}
