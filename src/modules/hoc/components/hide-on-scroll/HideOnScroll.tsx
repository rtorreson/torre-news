import Slide from "@mui/material/Slide";
import { useScrollTrigger } from "@mui/material";

function HideOnScroll({ children }: { children: any }) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default HideOnScroll