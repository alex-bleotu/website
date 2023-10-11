import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CircularProgress from "../../components/circleProgress";
import LinearProgress from "../../components/linearProgress";

const About = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");
    const isLargeScreen = useMediaQuery("(min-width:1200px)");

    const [romanianProgress, setRomanianProgress] = useState(0);
    const [englishProgress, setEnglishProgress] = useState(0);
    const [germanProgress, setGermanProgress] = useState(0);
    const romanianMaxProgress = 100;
    const englishMaxProgress = 95;
    const germanMaxProgress = 40;

    const [bar1Progress, setBar1Progress] = useState(0);
    const [bar2Progress, setBar2Progress] = useState(0);
    const [bar3Progress, setBar3Progress] = useState(0);
    const [bar4Progress, setBar4Progress] = useState(0);
    const [bar5Progress, setBar5Progress] = useState(0);
    const [bar6Progress, setBar6Progress] = useState(0);
    const bar1MaxProgress = 95;
    const bar2MaxProgress = 87;
    const bar3MaxProgress = 85;
    const bar4MaxProgress = 90;
    const bar5MaxProgress = 90;
    const bar6MaxProgress = 85;

    const triggerYSmallScreen = 700;
    const triggerYLargeScreen = 600;

    const triggerYSmallScreen2 = 875;
    const triggerYLargeScreen2 = 400;

    useEffect(() => {
        let interval: any;

        const handleScroll = () => {
            const yCoordinate = window.scrollY;

            const triggerY = isSmallScreen
                ? triggerYSmallScreen
                : triggerYLargeScreen;
            if (yCoordinate >= triggerY) {
                interval = setInterval(
                    () => {
                        setRomanianProgress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === romanianMaxProgress) {
                                if (
                                    germanProgress === germanMaxProgress &&
                                    englishProgress === englishMaxProgress
                                )
                                    clearInterval(interval);
                                return romanianMaxProgress;
                            }

                            return newValue;
                        });
                        setEnglishProgress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === englishMaxProgress) {
                                if (
                                    romanianProgress === romanianMaxProgress &&
                                    germanProgress === germanMaxProgress
                                )
                                    clearInterval(interval);
                                return englishMaxProgress;
                            }

                            return newValue;
                        });
                        setGermanProgress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === germanMaxProgress) {
                                if (
                                    romanianProgress === romanianMaxProgress &&
                                    englishProgress === englishMaxProgress
                                )
                                    clearInterval(interval);
                                return germanMaxProgress;
                            }

                            return newValue;
                        });
                    },
                    isSmallScreen ? 100 : 15
                );
            } else {
                clearInterval(interval);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    useEffect(() => {
        let interval: any;

        const handleScroll = () => {
            const yCoordinate = window.scrollY;

            const triggerY = isSmallScreen
                ? triggerYSmallScreen2
                : triggerYLargeScreen2;
            if (yCoordinate >= triggerY) {
                interval = setInterval(
                    () => {
                        setBar1Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar1MaxProgress) {
                                if (
                                    bar2Progress === bar2MaxProgress &&
                                    bar3Progress === bar3MaxProgress &&
                                    bar4Progress === bar4MaxProgress &&
                                    bar5Progress === bar5MaxProgress &&
                                    bar6Progress === bar6MaxProgress
                                )
                                    clearInterval(interval);
                                return bar1MaxProgress;
                            }

                            return newValue;
                        });
                        setBar2Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar2MaxProgress) {
                                if (
                                    bar1Progress === bar1MaxProgress &&
                                    bar3Progress === bar3MaxProgress &&
                                    bar4Progress === bar4MaxProgress &&
                                    bar5Progress === bar5MaxProgress &&
                                    bar6Progress === bar6MaxProgress
                                )
                                    clearInterval(interval);
                                return bar2MaxProgress;
                            }

                            return newValue;
                        });
                        setBar3Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar3MaxProgress) {
                                if (
                                    bar1Progress === bar1MaxProgress &&
                                    bar2Progress === bar2MaxProgress &&
                                    bar4Progress === bar4MaxProgress &&
                                    bar5Progress === bar5MaxProgress &&
                                    bar6Progress === bar6MaxProgress
                                )
                                    clearInterval(interval);
                                return bar3MaxProgress;
                            }

                            return newValue;
                        });
                        setBar4Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar4MaxProgress) {
                                if (
                                    bar1Progress === bar1MaxProgress &&
                                    bar2Progress === bar2MaxProgress &&
                                    bar3Progress === bar3MaxProgress &&
                                    bar5Progress === bar5MaxProgress &&
                                    bar6Progress === bar6MaxProgress
                                )
                                    clearInterval(interval);
                                return bar4MaxProgress;
                            }

                            return newValue;
                        });
                        setBar5Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar5MaxProgress) {
                                if (
                                    bar1Progress === bar1MaxProgress &&
                                    bar2Progress === bar2MaxProgress &&
                                    bar3Progress === bar3MaxProgress &&
                                    bar4Progress === bar4MaxProgress &&
                                    bar6Progress === bar6MaxProgress
                                )
                                    clearInterval(interval);
                                return bar5MaxProgress;
                            }

                            return newValue;
                        });
                        setBar6Progress((oldValue) => {
                            const newValue = oldValue + 1;

                            if (oldValue === bar6MaxProgress) {
                                if (
                                    bar1Progress === bar1MaxProgress &&
                                    bar2Progress === bar2MaxProgress &&
                                    bar3Progress === bar3MaxProgress &&
                                    bar4Progress === bar4MaxProgress &&
                                    bar5Progress === bar5MaxProgress
                                )
                                    clearInterval(interval);
                                return bar6MaxProgress;
                            }

                            return newValue;
                        });
                    },
                    isSmallScreen ? 35 : 5
                );
            } else {
                clearInterval(interval);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearInterval(interval);
        };
    }, []);

    return (
        <Box
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative">
            <Box
                display="flex"
                height="100%"
                width="100%"
                zIndex={0}
                alignItems="center"
                flexDirection="column">
                <Typography
                    fontSize="3rem"
                    fontWeight="600"
                    color={theme.palette.text.primary}
                    mr={2}>
                    About Me
                </Typography>

                <Grid container width={isSmallScreen ? "95%" : "80%"} mt={2}>
                    <Grid item xs={12} md={5.5} lg={5} p={5}>
                        <Box>
                            <Typography
                                fontSize="1.7rem"
                                mb={2}
                                color={theme.palette.text.primary}>
                                Education
                            </Typography>

                            <Typography
                                fontSize="1rem"
                                color={theme.palette.text.primary}>
                                National Collage of Computer Science "Grigore
                                Moisil", Brasov
                            </Typography>
                            <Typography
                                fontSize="1rem"
                                mt={1}
                                color={theme.palette.text.primary}>
                                Specialization:
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                        marginLeft: 5,
                                        marginRight: 5,
                                    }}>
                                    Computer Science
                                </span>
                                (2021-2025)
                            </Typography>
                            <Button
                                variant="outlined"
                                color="primary"
                                href="https://moisilbrasov.ro/"
                                target="_blank"
                                sx={{
                                    borderRadius: 15,
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    px: 2,
                                    py: 1.5,
                                    mt: 2,
                                    ml: -0.5,
                                }}>
                                Learn More
                                <ChevronRightIcon sx={{ ml: 1, mt: -0.15 }} />
                            </Button>
                        </Box>

                        <Box mt={5}>
                            <Typography
                                fontSize="1.7rem"
                                mb={3}
                                color={theme.palette.text.primary}>
                                Language
                            </Typography>

                            <Grid
                                container
                                width={
                                    isSmallScreen
                                        ? "100%"
                                        : isLargeScreen
                                        ? "70%"
                                        : "90%"
                                }>
                                <Grid
                                    item
                                    xs={4}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems={
                                        isSmallScreen ? "center" : "flex-start"
                                    }>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center">
                                        <CircularProgress
                                            progress={romanianProgress}
                                        />
                                        <Typography
                                            textAlign="center"
                                            color={theme.palette.text.primary}
                                            mt={1}
                                            fontWeight={600}>
                                            Romanian
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    display="flex"
                                    flexDirection="column"
                                    px={1}
                                    alignItems={
                                        isSmallScreen ? "center" : "flex-start"
                                    }>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center">
                                        <CircularProgress
                                            progress={englishProgress}
                                        />
                                        <Typography
                                            textAlign="center"
                                            color={theme.palette.text.primary}
                                            mt={1}
                                            fontWeight={600}>
                                            English
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems={
                                        isSmallScreen ? "center" : "flex-start"
                                    }>
                                    <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center">
                                        <CircularProgress
                                            progress={germanProgress}
                                        />
                                        <Typography
                                            textAlign="center"
                                            color={theme.palette.text.primary}
                                            mt={1}
                                            fontWeight={600}>
                                            German
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6.5} lg={7} p={5} height="100%">
                        <Typography
                            fontSize="1.7rem"
                            mb={2}
                            color={theme.palette.text.primary}>
                            My Skills
                        </Typography>

                        <Grid container>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="react"
                                    progress={bar1Progress}
                                    name="React"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="spring"
                                    progress={bar2Progress}
                                    name="Spring Boot"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="node"
                                    progress={bar3Progress}
                                    name="Node JS"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="unity"
                                    progress={bar4Progress}
                                    name="Unity"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="photoshop"
                                    progress={bar5Progress}
                                    name="Photoshop"
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="fusion"
                                    progress={bar6Progress}
                                    name="Fusion 360"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
