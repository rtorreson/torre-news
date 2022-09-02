import { FooterLinks } from "@modules/general/libraries/generalTypes";

function GetFooterLinks(): FooterLinks[] {
  return [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "News", url: "/news" },
  ].reverse();
}

export { GetFooterLinks };
