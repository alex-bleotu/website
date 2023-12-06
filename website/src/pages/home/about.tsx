import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import HotelIcon from "@mui/icons-material/Hotel";
import WatchIcon from "@mui/icons-material/Watch";
import {
    Box,
    Button,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import AboutItem from "../../components/aboutItem";
import CircularProgress from "../../components/circleProgress";
import LinearProgress from "../../components/linearProgress";

const About = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");
    const isMediumScreen = useMediaQuery("(max-width:1050px)");
    const isLargeScreen = useMediaQuery("(min-width:1200px)");

    const daysDifference: number = Math.round(
        (new Date().getTime() - new Date("2023-01-01").getTime()) /
            (1000 * 3600 * 24)
    );

    const workedHours = daysDifference * 3;

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
                    fontSize="2.5rem"
                    fontWeight="600"
                    color={theme.palette.text.primary}
                    mr={2}>
                    About Me
                </Typography>

                <Grid
                    container
                    width={
                        isSmallScreen ? "100%" : isMediumScreen ? "85%" : "80%"
                    }
                    mt={2}>
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
                                    transition:
                                        "transform 0.3s, box-shadow 0.3s",
                                    "&:hover": {
                                        border: "2px solid",
                                        transform:
                                            "scale(1.01) translateY(-2px)",
                                        boxShadow:
                                            "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                    },
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
                                            progress={100}
                                            delay={0}
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
                                            progress={95}
                                            delay={500}
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
                                            progress={45}
                                            delay={800}
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

                    <Grid
                        item
                        xs={12}
                        md={6.5}
                        lg={7}
                        p={5}
                        height="100%"
                        mt={isSmallScreen ? -4 : 0}>
                        <Typography
                            fontSize="1.7rem"
                            mb={2}
                            ml={isLargeScreen ? 2 : 0}
                            color={theme.palette.text.primary}>
                            My Skills
                        </Typography>

                        <Grid container ml={isSmallScreen ? -2 : 0}>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="react"
                                    progress={95}
                                    name="React"
                                    delay={0}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="bootstrap"
                                    progress={87}
                                    name="Bootstrap"
                                    delay={0}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="spring"
                                    progress={85}
                                    name="Spring Boot"
                                    delay={150}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="node"
                                    progress={90}
                                    name="Node JS"
                                    delay={150}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="figma"
                                    progress={81}
                                    name="Figma"
                                    delay={300}
                                />
                            </Grid>
                            <Grid item xs={12} lg={6}>
                                <LinearProgress
                                    icon="photoshop"
                                    progress={85}
                                    name="Photoshop"
                                    delay={300}
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} px={5} py={3}>
                        <Typography
                            fontSize="1.7rem"
                            mb={2}
                            color={theme.palette.text.primary}>
                            Fun Facts
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            width="100%">
                            <Grid
                                container
                                width={isSmallScreen ? "95%" : "100%"}
                                ml={isSmallScreen ? 0 : -2}>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    color={theme.palette.primary.main}>
                                    <AboutItem
                                        text="Projects Completed"
                                        number={12}
                                        icon={
                                            <FactCheckIcon fontSize="large" />
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    color={theme.palette.primary.main}>
                                    <AboutItem
                                        text="Worked Hours"
                                        number={workedHours}
                                        icon={<WatchIcon fontSize="large" />}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    color={theme.palette.primary.main}>
                                    <AboutItem
                                        text="Awards Won"
                                        number={7}
                                        icon={
                                            <EmojiEventsIcon fontSize="large" />
                                        }
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    color={theme.palette.primary.main}>
                                    <AboutItem
                                        text="Sleepless Nights"
                                        number={35}
                                        icon={<HotelIcon fontSize="large" />}
                                    />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
