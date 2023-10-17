import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import MenuButton from "./menuButton";
import { ThemeButtonText } from "./themeButton";

const NavBar = ({ action }: { action: any }) => {
    const isLargeScreen = useMediaQuery("(min-width:995px)");
    const isMediumScreen = useMediaQuery("(max-width:995px)");
    const isSmallScreen = useMediaQuery("(max-width:580px)");

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

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        const scroll =
            section?.offsetTop === undefined ? 0 : section?.offsetTop - 140;
        window.scrollTo({
            top: scroll,
            behavior: "smooth",
        });
    };

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
                        px: !isSmallScreen ? 1 : 2.5,
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
                    <Button
                        onClick={() => {
                            scrollToSection("description");
                        }}
                        color="inherit"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            ml: !isSmallScreen ? 1 : -2,
                            borderRadius: 20,
                            px: !isSmallScreen ? 3 : 2,
                            py: isSmallScreen ? 0 : 1.5,
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.01) translateY(-2px)",
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                            },
                        }}>
                        <Typography
                            color="inherit"
                            fontFamily="revert"
                            fontSize={isMediumScreen ? "1.4rem" : "1.3rem"}>
                            <span style={{ fontWeight: 600 }}>Alex</span> Bleotu
                        </Typography>
                    </Button>
                    <Box ml="auto">
                        {isSmallScreen && (
                            <Box mr={-1}>
                                <MenuButton action={action} />
                            </Box>
                        )}

                        {!isSmallScreen && <ThemeButtonText />}
                        {isLargeScreen && (
                            <>
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("about");
                                    }}
                                    sx={{
                                        fontWeight: 600,
                                        borderRadius: 20,
                                        px: 2.5,
                                        py: 1.5,
                                        fontSize: "1rem",
                                        transition:
                                            "transform 0.3s, box-shadow 0.3s",
                                        "&:hover": {
                                            transform:
                                                "scale(1.01) translateY(-2px)",
                                            boxShadow:
                                                "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                        },
                                    }}>
                                    About
                                </Button>
                                <Button
                                    color="inherit"
                                    sx={{
                                        fontWeight: 600,
                                        borderRadius: 20,
                                        px: 2.5,
                                        py: 1.5,
                                        mx: 1,
                                        fontSize: "1rem",
                                        transition:
                                            "transform 0.3s, box-shadow 0.3s",
                                        "&:hover": {
                                            transform:
                                                "scale(1.01) translateY(-2px)",
                                            boxShadow:
                                                "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                        },
                                    }}>
                                    Portofolio
                                </Button>
                                <Button
                                    color="inherit"
                                    onClick={() => {
                                        scrollToSection("contact");
                                    }}
                                    sx={{
                                        fontWeight: 600,
                                        borderRadius: 20,
                                        px: 2.5,
                                        py: 1.5,
                                        mr: 1,
                                        fontSize: "1rem",
                                        transition:
                                            "transform 0.3s, box-shadow 0.3s",
                                        "&:hover": {
                                            transform:
                                                "scale(1.01) translateY(-2px)",
                                            boxShadow:
                                                "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                        },
                                    }}>
                                    Contact
                                </Button>
                            </>
                        )}
                        {!isSmallScreen && (
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={() => {
                                    const link = document.createElement("a");
                                    link.href = "/cv.pdf";
                                    link.download = "cv.pdf";
                                    link.click();
                                }}
                                sx={{
                                    borderRadius: 15,
                                    fontWeight: 600,
                                    border: "2px solid",
                                    transition:
                                        "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        border: "2px solid",
                                        transform:
                                            "scale(1.01) translateY(-2px)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                    },
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
