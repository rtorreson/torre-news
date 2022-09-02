import React from "react";
import ShareIcon from "@mui/icons-material/Share"
import SocialCard from "../../general/components/social-card/SocialCard";
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import GithubIcon from "@mui/icons-material/Github"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GeneralCard from "../../general/components/general-card/GeneralCard";
import { OwnerData } from "@modules/general/libraries/owner-data";

const SocialMedia = ({
    ownerData
}:{
    ownerData: OwnerData
}) => {
  return (
    <GeneralCard title="Social Media" icon={<ShareIcon />}>
      <SocialCard title={ownerData.PHONE} icon={<WhatsAppIcon />} />
      <SocialCard title={ownerData.LINKEDIN} icon={<LinkedInIcon />} />
      <SocialCard title={ownerData.GITHUB} icon={<GithubIcon />} />
    </GeneralCard>
  );
};

export default SocialMedia;
