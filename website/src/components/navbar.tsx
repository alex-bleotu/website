import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import ThemeButton from "./themeButton";

const NavBar = () => {
    const isLargeScreen = useMediaQuery("(min-width:900px)");
    const isMediumScreen = useMediaQuery("(min-width:450px)");
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    return (
        <Box position="absolute" width="100%">
            <Box p={2}>
                <Paper
                    sx={{
                        borderRadius: 20,
                        py: 1,
                        px: 1,
                        display: "flex",
                        flexDirection: "row",
                    }}
                    elevation={3}>
                    <Box display="flex" alignItems="center" ml={2}>
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
                                    Resume
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
                                    px: 2.5,
                                    py: 1.5,
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
