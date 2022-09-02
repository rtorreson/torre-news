import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface NavLink {
  id: number;
  title: string;
  url: string;
}
export interface MenuItem extends NavLink {
  children?: MenuItem[];
}
export interface FooterLinks extends NavLink {}

export type FooterSegmentTitle = "Fast Access" | "Contact Us";

export type IconType = OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
  muiName: string;
}
