import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export interface DeviceType {
  isMobile: boolean;
  isTablet: boolean;
  isSmallScreen: boolean;
  isNormalScreen: boolean;
  isLargeScreen: boolean;
  isScreen: boolean;
  isNotMobile: boolean;
}

export function useDeviceType(): DeviceType {
  const theme: any = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  const isTablet = useMediaQuery(theme.breakpoints.only("sm"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("md"));
  const isNormalScreen = useMediaQuery(theme.breakpoints.only("lg"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.only("xl"));

  return {
    isMobile,
    isTablet,
    isSmallScreen,
    isNormalScreen,
    isLargeScreen,
    isScreen: isSmallScreen || isNormalScreen || isLargeScreen,
    isNotMobile: isSmallScreen || isLargeScreen || isNormalScreen || isTablet,
  };
}

export const useIsMobile = () => {
  const theme:any = useTheme();
  return useMediaQuery(theme.breakpoints.only("xs"));
};

export const useIsTablet = () => {
  const theme:any = useTheme();
  return useMediaQuery(theme.breakpoints.only("sm"));
};

export const useIsSmallScreen = () => {
  const theme:any = useTheme();
  return useMediaQuery(theme.breakpoints.only("md"));
};

export const useIsNormalScreen = () => {
  const theme:any = useTheme();
  return useMediaQuery(theme.breakpoints.only("lg"));
};

export const useIsBigScreen = () => {
  const theme:any = useTheme();
  return useMediaQuery(theme.breakpoints.only("xl"));
};
