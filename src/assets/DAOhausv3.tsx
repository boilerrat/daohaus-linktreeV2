// assets/DAOhausV3.ts
import { GiWizardStaff,
         GiWhiteBook,
         GiChessRook,
         GiDiagram,
         GiAbacus,
         GiMagnifyingGlass,
         GiHobbitDwelling
         } from "react-icons/gi";
         import { FaToolbox, FaLayerGroup } from "react-icons/fa6";

const DAOhausV3 = [
  {
    title: 'Admin App',
    url: 'https://admin.daohaus.club/',
    icon: <GiChessRook />
  },
  {
    title: 'Data Dashboard',
    url: 'https://flipsidecrypto.xyz/santtee/dao-haus-dashboard-gP6ort',
    icon: <GiDiagram />,
  },
  {
    title: 'Docs',
    url: 'https://docs.daohaus.club/',
    icon: <GiWhiteBook />,
  },
  {
    title: 'Hub App',
    url: 'https://hub.daohaus.club/',
    icon: < FaLayerGroup />,
  },  
  {
    title: 'Subgraph',
    url: 'https://thegraph.com/explorer/subgraph?id=GfHFdFmiSwW1PKtnDhhcxhArwtTjVuMnXxQ5XcETF1bP&view=Overview',
    icon: <GiAbacus />,
  },
  {
    title: 'Summon App',
    url: 'https://summon.daohaus.club/',
    icon: < GiWizardStaff />,
  },
  {
    title: 'Simple Search',
    url: 'https://simple-search.daohaus.club/',
    icon: < GiMagnifyingGlass  />,
  },
  {
    title: 'Toolbox',
    url: 'https://toolbox.daohaus.club/',
    icon: < FaToolbox  />,
  },
  {
    title: 'Website',
    url: 'https://daohaus.club/',
    icon: <GiHobbitDwelling   />
  },
];

export default DAOhausV3;
