// assets/media.tsx
import { 
    FaYoutube,
    FaTwitch,
    FaX,
    FaMedium,
    FaDiscord
     } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { GiMirrorMirror } from "react-icons/gi";

const Media = [
    {
        title: "Discord",
        url: "https://discord.gg/daohaus",
        icon: < FaDiscord />,
    },
    {
        title: "Medium",
        url: "https://medium.com/daohaus-club",
        icon: < FaMedium />,
    },     
    {
        title: "Mirror",
        url: "https://daohaus.mirror.xyz/",
        icon: < GiMirrorMirror />,
    },      
    {
        title: "Substack",
        url: "https://daohaus.substack.com/",
        icon: < SiSubstack />,
    },
    {
        title: "X",
        url: "https://twitter.com/DAOhaus",
        icon: < FaX />,
    },      
    {
        title: "Twitch",
        url: "https://www.twitch.tv/daohaus",
        icon: < FaTwitch />,
    },
    {
        title: "Youtube",
        url: "https://www.youtube.com/channel/UCKQOk6tM7r3lKN0HQdGXlcg",
        icon: < FaYoutube />,
    },
  ];
  
  export default Media;