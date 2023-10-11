import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import MenuButton from "./menuButton";
import ThemeButton from "./themeButton";

const NavBar = () => {
    const isLargeScreen = useMediaQuery("(min-width:900px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box position="fixed" width="100%" zIndex={5} top={0}>
            <Box
                px={!isSmallScreen ? (isMediumScreen ? 2 : 4) : 0}
                pt={!isSmallScreen ? (isMediumScreen ? 2 : 4) : 0}
                bgcolor="background.default"
                sx={{ transition: "padding 0.4s ease" }}>
                <Paper
                    sx={{
                        borderBottomLeftRadius: !isSmallScreen ? 45 : 15,
                        borderBottomRightRadius: !isSmallScreen ? 45 : 15,
                        borderTopLeftRadius: !isSmallScreen ? 45 : 0,
                        borderTopRightRadius: !isSmallScreen ? 45 : 0,
                        py: !isSmallScreen ? 1 : 2,
                        px: !isSmallScreen ? 1 : 2,
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: isScrolled
                            ? "background.paper"
                            : "transparent",
                        transition:
                            "background-color 0.5s ease, border-radius 0.5s ease",
                    }}
                    elevation={isScrolled ? 3 : 0}>
                    <Box
                        display="flex"
                        alignItems="center"
                        ml={!isSmallScreen ? 2 : 0}>
                        <Typography
                            color="inherit"
                            fontFamily="revert"
                            fontSize={isMediumScreen ? "1.4rem" : "1.25rem"}
                            fontWeight={600}
                            mr={1}>
                            Alex
                        </Typography>
                        <Typography
                            color="inherit"
                            fontFamily="revert"
                            fontSize={isMediumScreen ? "1.4rem" : "1.25rem"}>
                            Bleotu
                        </Typography>
                    </Box>
                    <Box ml="auto">
                        {isSmallScreen && <MenuButton />}
                        {isLargeScreen && (
                            <>
                                <ThemeButton />
                                <Button
                                    color="inherit"
                                    sx={{ mr: 2, fontWeight: 600 }}>
                                    About
                                </Button>
                                <Button
                                    color="inherit"
                                    sx={{ mr: 2, fontWeight: 600 }}>
                                    Portofolio
                                </Button>
                                <Button
                                    color="inherit"
                                    sx={{ mr: 2, fontWeight: 600 }}>
                                    Contact
                                </Button>
                            </>
                        )}
                        {!isSmallScreen && (
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderRadius: 15,
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    px: 2.5,
                                    py: 2,
                                }}>
                                Download cv
                                <FileDownloadIcon
                                    fontSize="small"
                                    sx={{ ml: 1 }}
                                />
                            </Button>
                        )}
                    </Box>
                </Paper>
            </Box>
        </Box>
    );
};

export default NavBar;
