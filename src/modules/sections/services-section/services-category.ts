import SpaIcon from '@mui/icons-material/Spa';
import CasinoIcon from '@mui/icons-material/Casino';
import ScienceIcon from "@mui/icons-material/Science";
import DevicesIcon from "@mui/icons-material/Devices";
import BusinessIcon from "@mui/icons-material/Business";
import InterestsIcon from '@mui/icons-material/Interests';
import { IconType } from "@modules/general/libraries/generalTypes";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

export interface Category {
  title: string;
  url: string;
  icon: IconType;
  id: number
}

const newsCategory: Category[] = [
  {
    title: "business",
    url: "service/business",
    icon: BusinessIcon,
    id: 1,
  },
  {
    title: "science",
    url: "service/science",
    icon: ScienceIcon,
    id: 2,
  },
  {
    title: "sports",
    url: "service/sports",
    icon: SportsBasketballIcon,
    id: 3,
  },
  {
    title: "technology",
    url: "service/technology",
    icon: DevicesIcon,
    id: 4,
  },
  {
    title: "entertainment",
    url: "service/entertainment",
    icon: CasinoIcon,
    id: 5,
  },
  {
    title: "general",
    url: "service/general",
    icon: InterestsIcon,
    id: 6,
  },
  {
    title: "health",
    url: "service/health",
    icon: SpaIcon,
    id: 7,
  },
];

const getNewsCategory = () => ([ ...newsCategory ]);

export default getNewsCategory;


// business entertainment general health science sports technology