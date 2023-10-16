import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {
    Box,
    Button,
    Grid,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import Line from "./line";

const Footbar = () => {
    const theme = useTheme();
    const isLargeScreen = useMediaQuery("(min-width:1200px)");
    const isExtraLargeScreen = useMediaQuery("(min-width:1600px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    return (
        <Paper>
            <Box
                p={4}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                mt={isLargeScreen ? 2 : 5}>
                <Box display="flex" justifyContent="center" mb={3}>
                    <Grid
                        container
                        width={
                            isLargeScreen
                                ? "95%"
                                : isExtraLargeScreen
                                ? "85%"
                                : isSmallScreen
                                ? "100%"
                                : "75%"
                        }>
                        <Grid
                            item
                            lg={4}
                            xs={12}
                            md={12}
                            display="flex"
                            justifyContent="center">
                            <Typography fontSize="1.5rem">
                                <span style={{ fontWeight: "600" }}>Alex</span>{" "}
                                Bleotu
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            xs={12}
                            md={12}
                            display="flex"
                            justifyContent="center"
                            mt={isLargeScreen ? 1 : 2}>
                            <Grid
                                container
                                maxWidth={
                                    isLargeScreen
                                        ? "100%"
                                        : isMediumScreen
                                        ? 325
                                        : 400
                                }
                                width={
                                    isLargeScreen
                                        ? "100%"
                                        : isSmallScreen
                                        ? "100%"
                                        : "85%"
                                }>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}
                                    display="flex"
                                    justifyContent="center">
                                    alexbleotu2006@gmail.com
                                </Grid>
                                <Grid
                                    item
                                    lg={6}
                                    md={6}
                                    xs={12}
                                    display="flex"
                                    justifyContent="center"
                                    mt={!isMediumScreen ? 0 : 1}>
                                    +40 756 775 906
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            lg={4}
                            md={12}
                            xs={12}
                            mt={!isLargeScreen ? 2 : 0}
                            display="flex"
                            justifyContent="center">
                            <Grid container maxWidth={250}>
                                <Grid
                                    item
                                    xs={3}
                                    display="flex"
                                    justifyContent="center">
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
                                            transition:
                                                "transform 0.3s, box-shadow 0.3s",
                                            "&:hover": {
                                                transform:
                                                    "scale(1.01) translateY(-2px)",
                                                boxShadow:
                                                    "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                            },
                                        }}>
                                        <FacebookIcon />
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    display="flex"
                                    justifyContent="center">
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
                                            transition:
                                                "transform 0.3s, box-shadow 0.3s",
                                            "&:hover": {
                                                transform:
                                                    "scale(1.01) translateY(-2px)",
                                                boxShadow:
                                                    "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                            },
                                        }}>
                                        <InstagramIcon />
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    display="flex"
                                    justifyContent="center">
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
                                            transition:
                                                "transform 0.3s, box-shadow 0.3s",
                                            "&:hover": {
                                                transform:
                                                    "scale(1.01) translateY(-2px)",
                                                boxShadow:
                                                    "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                            },
                                        }}>
                                        <LinkedInIcon />
                                    </Button>
                                </Grid>
                                <Grid
                                    item
                                    xs={3}
                                    display="flex"
                                    justifyContent="center">
                                    <Button
                                        onClick={() =>
                                            (window.location.href =
                                                "mailto:alexbleotu2006@gmail.com")
                                        }
                                        sx={{
                                            color: theme.palette.text.primary,
                                            borderRadius: 20,
                                            transition:
                                                "transform 0.3s, box-shadow 0.3s",
                                            "&:hover": {
                                                transform:
                                                    "scale(1.01) translateY(-2px)",
                                                boxShadow:
                                                    "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                            },
                                        }}>
                                        <EmailIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>

                <Line
                    color={theme.palette.text.primary}
                    margin={false}
                    width={
                        isLargeScreen ? "80%" : isSmallScreen ? "100%" : "75%"
                    }
                />

                <Box
                    mt={3}
                    display={isMediumScreen ? "block" : "flex"}
                    justifyContent="center">
                    <Typography
                        fontSize="1rem"
                        color={theme.palette.text.primary}
                        mr={isSmallScreen ? 0 : 1}
                        textAlign="center">
                        © 2023 Alex Bleotu.
                    </Typography>
                    <Typography
                        fontSize="1rem"
                        color={theme.palette.text.primary}
                        textAlign="center">
                        All rights reserved | Powered by ❤️
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default Footbar;
