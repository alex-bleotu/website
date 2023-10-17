import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
    Box,
    Button,
    Grid,
    SwipeableDrawer,
    Typography,
    useTheme,
} from "@mui/material";
import Line from "./line";
import { ThemeButtonText } from "./themeButton";

const SideBar = ({
    state,
    onOpen,
    onClose,
}: {
    state: boolean;
    onOpen: any;
    onClose: any;
}) => {
    const iOS =
        typeof navigator !== "undefined" &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);
    const theme = useTheme();

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        const scroll =
            section?.offsetTop === undefined ? 0 : section?.offsetTop - 100;
        window.scrollTo({
            top: scroll,
            behavior: "smooth",
        });
    };

    return (
        <SwipeableDrawer
            disableBackdropTransition={!iOS}
            disableDiscovery={iOS}
            PaperProps={{
                style: {
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                },
            }}
            anchor="right"
            onOpen={onOpen}
            onClose={onClose}
            open={state}>
            <Box
                display="flex"
                flexDirection="column"
                pt={5}
                pr={2.5}
                pl={5}
                pb={3}
                height="100%">
                <Typography
                    color="inherit"
                    fontFamily="revert"
                    textAlign="right"
                    mr={2.3}
                    mb={3}
                    fontSize={"1.6rem"}>
                    <span style={{ fontWeight: 600 }}>Alex</span> Bleotu
                </Typography>
                <Line width="100%" margin={false} />
                <Button
                    color="inherit"
                    onClick={() => {
                        scrollToSection("about");
                        onClose();
                    }}
                    sx={{
                        width: "100%",
                        fontWeight: 600,
                        borderRadius: 20,
                        px: 2.5,
                        py: 1,
                        mt: 2,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "scale(1.01) translateY(-2px)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        },
                    }}>
                    <Box width="100%" display="flex" fontSize={"1rem"}>
                        <Box ml="auto">About</Box>
                    </Box>
                </Button>
                <Button
                    color="inherit"
                    sx={{
                        fontWeight: 600,
                        borderRadius: 20,
                        px: 2.5,
                        py: 1,
                        my: 1,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "scale(1.01) translateY(-2px)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        },
                    }}>
                    <Box width="100%" display="flex" fontSize={"1rem"}>
                        <Box ml="auto">Portofolio</Box>
                    </Box>
                </Button>
                <Button
                    color="inherit"
                    onClick={() => {
                        scrollToSection("contact");
                        onClose();
                    }}
                    sx={{
                        fontWeight: 600,
                        borderRadius: 20,
                        px: 2.5,
                        py: 1,
                        my: 1,
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            transform: "scale(1.01) translateY(-2px)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        },
                    }}>
                    <Box width="100%" display="flex" fontSize={"1rem"}>
                        <Box ml="auto">Contact</Box>
                    </Box>
                </Button>
                <Box my={1}>
                    <Line width="100%" margin={false} />
                </Box>
                <ThemeButtonText />
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
                        mt: 2,
                        borderRadius: 15,
                        fontWeight: 600,
                        border: "2px solid",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                            border: "2px solid",
                            transform: "scale(1.01) translateY(-2px)",
                            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                        },
                        px: 1.5,
                        py: 1.5,
                    }}>
                    Download cv
                    <FileDownloadIcon fontSize="small" sx={{ ml: 1 }} />
                </Button>
                <Grid container width={165} mt={"auto"}>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://www.facebook.com/profile.php?id=100051325801923",
                                    "_blank"
                                )
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                borderRadius: 20,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}>
                            <FacebookIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://www.instagram.com/alex.bleotu/",
                                    "_blank"
                                )
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                borderRadius: 20,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}>
                            <InstagramIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <Button
                            onClick={() =>
                                window.open(
                                    "https://www.linkedin.com/in/alexbleotu/",
                                    "_blank"
                                )
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                borderRadius: 20,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}>
                            <LinkedInIcon />
                        </Button>
                    </Grid>
                    <Grid item xs={3} display="flex" justifyContent="center">
                        <Button
                            onClick={() =>
                                (window.location.href =
                                    "mailto:alexbleotu2006@gmail.com")
                            }
                            sx={{
                                color: theme.palette.text.primary,
                                borderRadius: 20,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}>
                            <EmailIcon />
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </SwipeableDrawer>
    );
};

export default SideBar;
