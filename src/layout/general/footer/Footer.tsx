import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { GetFooterLinks } from "./libraries/FooterLinkHelpers";
import * as ownerData from "@modules/general/libraries/owner-data";
import { DeviceType } from "@modules/general/libraries/device-type";
import { FooterLinks } from "@modules/general/libraries/generalTypes";
import FooterSegment from "@root/modules/general/components/footer/footer-segment";
import FooterContactBox from "@root/modules/general/components/footer/contact-box";
import { CONTAINER_WIDTH, FOOTER_HEIGHT } from "@root/modules/general/libraries/constants";

const footerLinks = GetFooterLinks();

const Footer = ({ deviceType }: { deviceType: DeviceType }) => {
  const {palette} = useTheme();
  return (
    <footer>
      <Box sx={{ minHeight: `${FOOTER_HEIGHT}px`, bgcolor:palette.primary.dark, color: palette.common.white, mt:6}}>
        <Grid sx={{width:CONTAINER_WIDTH, mx:"auto"}} container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <FooterSegment title="fast access">
              <ul>
                {footerLinks.map((link, i) => (
                  <Link href={link.url} passHref key={link.id}>
                    <li>{link.title}</li>
                  </Link>
                ))}
              </ul>
            </FooterSegment>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <FooterSegment title="contact us">
              <FooterContactBox
                icon={<LocalPhoneIcon />}
                value={ownerData.PHONE}
                title="phone number :"
              />
              <FooterContactBox
                icon={<EmailIcon />}
                value={ownerData.EMAIL}
                title="email :"
              />
              <FooterContactBox
                icon={<LocationOnIcon />}
                value={ownerData.ADDRESS}
                title="address :"
              />
            </FooterSegment>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;
