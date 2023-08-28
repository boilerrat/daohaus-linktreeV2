import { GiToken, GiCrownCoin } from "react-icons/gi";
import { FaEthereum, FaBicycle } from "react-icons/fa6";

const HausToken = [
    {
        title: "$HAUS on Gnosis",
        url: "https://blockscout.com/xdai/mainnet/token/0xb0C5f3100A4d9d9532a4CfD68c55F1AE8da987Eb/",
        icon: < GiToken />,
    },
    {
        title: "$HAUS on Mainnet",
        url: "https://etherscan.io/token/0xf2051511b9b121394fa75b8f7d4e7424337af687",
        icon: < FaEthereum />,
    }, 
    {
        title: "$HAUS on Optimism",
        url: "https://optimistic.etherscan.io/address/0x01B8b6384298D4848E3BE63D4C9D17830EeE488A",
        icon: < GiCrownCoin />,
    },
    {
        title: "Liquidity Pool on Optimisim",
        url: "https://velodrome.finance/liquidity?filter=lowTvl&query=haus",
        icon: < FaBicycle />
    },
  ];
  
  export default HausToken;
  