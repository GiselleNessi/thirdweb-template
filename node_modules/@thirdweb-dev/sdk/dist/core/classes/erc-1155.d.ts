import { ContractWrapper } from "./contract-wrapper";
import { DropERC1155, TokenERC1155 } from "@thirdweb-dev/contracts";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { NFTMetadata } from "../../schema/tokens/common";
import { IStorage } from "../interfaces";
import { NetworkOrSignerOrProvider, TransactionResult } from "../types";
import { UpdateableNetwork } from "../interfaces/contract";
import { SDKOptions } from "../../schema/sdk-options";
import { EditionMetadata, EditionMetadataOwner } from "../../schema/tokens/edition";
import { QueryAllParams } from "../../types";
/**
 * Standard ERC1155 functions
 * @public
 */
export declare class Erc1155<T extends DropERC1155 | TokenERC1155> implements UpdateableNetwork {
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
    get(tokenId: BigNumberish): Promise<EditionMetadata>;
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
    getAll(queryParams?: QueryAllParams): Promise<EditionMetadata[]>;
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
    getOwned(_address?: string): Promise<EditionMetadataOwner[]>;
    /**
     * Returns the total supply of a specific token
     * @param tokenId - The token ID to get the total supply of
     * @returns the total supply
     */
    totalSupply(tokenId: BigNumberish): Promise<BigNumber>;
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
    balanceOf(address: string, tokenId: BigNumberish): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(tokenId: BigNumberish): Promise<BigNumber>;
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
     * // How many copies of the NFTs to transfer
     * const amount = 3;
     *
     * await contract.transfer(toAddress, tokenId, amount);
     * ```
     */
    transfer(to: string, tokenId: BigNumberish, amount: BigNumberish, data?: BytesLike): Promise<TransactionResult>;
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     */
    burn(tokenId: BigNumberish, amount: BigNumberish): Promise<TransactionResult>;
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
     * @param tokenId - the token Id to fetch
     */
    protected getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
}
