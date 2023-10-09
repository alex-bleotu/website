import {
    Box,
    Grid,
    LinearProgress,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import CircularProgress from "../../components/circleProgress";

const About = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:650px)");

    return (
        <Box
            height="100vh"
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
                <Grid container>
                    <Grid item xs={12} md={6} p={5}>
                        <Typography
                            fontSize="1.5rem"
                            color={theme.palette.text.primary}>
                            Education
                        </Typography>
                        <Typography
                            fontSize="1rem"
                            color={theme.palette.text.primary}>
                            National Collage of Computer Science "Grigore
                            Moisil", Brasov (2021 - 2025)
                        </Typography>
                        <Typography
                            fontSize="1.5rem"
                            color={theme.palette.text.primary}>
                            Language
                        </Typography>

                        <Box display="flex">
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <CircularProgress progress={100} />
                                <Typography
                                    textAlign="center"
                                    color={theme.palette.text.primary}
                                    mt={1}
                                    fontWeight={600}>
                                    Romanian
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <CircularProgress progress={90} />
                                <Typography
                                    textAlign="center"
                                    color={theme.palette.text.primary}
                                    mt={1}
                                    fontWeight={600}>
                                    English
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center">
                                <CircularProgress progress={40} />
                                <Typography
                                    textAlign="center"
                                    color={theme.palette.text.primary}
                                    mt={1}
                                    fontWeight={600}>
                                    German
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} p={5}>
                        <Typography
                            fontSize="1.5rem"
                            color={theme.palette.text.primary}>
                            My Skill
                        </Typography>

                        <LinearProgress variant="determinate" value={50} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
