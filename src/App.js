import { useAddress, useDisconnect, useMetamask, useNFTDrop } from '@thirdweb-dev/react';
import { useEffect, useState } from 'react';

const App = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  const nftDrop = useNFTDrop("0x65E14ecAC9c612a9C204163939A588D159b21c80");
  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  useEffect(() => {
    // if they don't have connected wallet, exit!
    if (!address) {
      return;
    }

    const checkBalance = async () => {
      try {
        const nfts = await nftDrop.getOwned(address);
        setHasClaimedNFT(nfts?.lenght > 0);
      } catch (error) {
        setHasClaimedNFT(false);
        console.error("Failed to get NFTs", error);
      }
    };
    checkBalance();
  }, [address, nftDrop]);


  const mintNft = async () => {
    try {
      setIsClaiming(true);
      await nftDrop.claim(1);
      setHasClaimedNFT(true);
    } catch (error) {
      setHasClaimedNFT(false);
      console.error("Failed to mint NFT", error);
    } finally {
      setIsClaiming(false);
    }
  }

  if (!address) {
    return <button onClick={connectWithMetamask}>Connect with Metamask</button>
  }

  if (hasClaimedNFT) {
    return (
      <div>
        You have a membership NFT!
      </div>
    )
  }

  return (
    <div>
      <p>Your address: {address}</p>
      <button disabled={isClaiming} onClick={mintNft}>Mint NFT</button>
    </div>
  );
};

export default App;
