import { Box, Button, useTheme, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from 'next/image';
import LangToggle from "../components/LangToggle";
import { useMediaQuery, Theme } from "@mui/material";

const Header = () => {
  const router = useRouter();
  const { palette } = useTheme();
  const matchesSm = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));

  const homepageText = router.locale === "en" ? "Home" : "Accueil";
  const logoAltText = "CAFI Logo";

  const handleHomePageClick = () => {
    router.push(router.locale === "en" ? "/en/home" : "/fr/home");
  };

  const flexWrap = matchesSm ? "wrap" : "nowrap";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: palette.grey[100],
        flexWrap: flexWrap
      }}
    >
      <Button variant="contained" color="primary" onClick={handleHomePageClick}>
        {homepageText}
      </Button>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: matchesSm ? "center" : "right" }}>
          <Typography variant={matchesSm ? "subtitle2" : "h6"} component="div" sx={{ fontWeight: 'bold' }}>
            CANADIAN ARMY
          </Typography>
          <Typography variant={matchesSm ? "subtitle2" : "h6"} component="div" sx={{ fontWeight: 'bold' }}>
            LAND WARFARE CENTRE
          </Typography>
        </Box>
        <Box sx={{ margin: "0 1rem" }}>
          <Image src="/images/cafi.png" alt={logoAltText} width={50} height={50} />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", textAlign: matchesSm ? "center" : "left" }}>
          <Typography variant={matchesSm ? "subtitle2" : "h6"} component="div" sx={{ fontWeight: 'bold' }}>
            EXPERIMENTATION
          </Typography>
          <Typography variant={matchesSm ? "subtitle2" : "h6"} component="div" sx={{ fontWeight: 'bold' }}>
            SERVICES CENTRE
          </Typography>
        </Box>
      </Box>
      <LangToggle />
    </Box>
  );
};

export default Header;
