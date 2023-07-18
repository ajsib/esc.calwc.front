import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import Image from 'next/image';

const Header = () => {
    const router = useRouter();
    const isEnglish = router.pathname.startsWith('/en');
    
    const handleLanguageToggle = () => {
        const newRoute = isEnglish ? router.pathname.replace('/en', '/fr') : router.pathname.replace('/fr', '/en');
        router.push(newRoute);
    };

    const handleHomeRedirect = () => {
        const homeRoute = isEnglish ? "/fr/index" : "/en/index";
        router.push(homeRoute);
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#F5F5F5", // off-white color
                padding: "1rem",
            }}
        >
            <Button variant="outlined" onClick={handleHomeRedirect}>
                {isEnglish ? "Home" : "Accueil"}
            </Button>

            <Typography variant="h6" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center' }}>
                CANADIAN ARMY
                <Box sx={{ mx: 1 }}>
                    <Image src="/images/cafi.png" alt="logo" width={60} height={60} />
                </Box>
                LAND WARFARE CENTRE
            </Typography>

            <Button variant="outlined" onClick={handleLanguageToggle}>
                {isEnglish ? "FR" : "EN"}
            </Button>
        </Box>
    );
};

export default Header;
