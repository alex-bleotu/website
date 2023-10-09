import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Box,
    Button,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Typewriter } from "react-simple-typewriter";

const Description = () => {
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
            {!isSmallScreen && (
                <Box display="flex" height="100%" zIndex={0} width="100%">
                    <Box
                        component="img"
                        src="./me.png"
                        mr={10}
                        bottom={0}
                        width="40%"
                        height="80%"
                        mt={15}
                        sx={{ opacity: 0.5 }}
                    />
                    <Box
                        maxWidth={550}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p={5}>
                        <Box display="flex">
                            <Typography
                                fontSize="3rem"
                                fontWeight="600"
                                color={theme.palette.text.primary}
                                mr={2}>
                                Alex
                            </Typography>
                            <Typography
                                fontSize="3rem"
                                color={theme.palette.text.primary}>
                                Bleotu
                            </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" mt={1}>
                            <Typography
                                fontSize="1.5rem"
                                color={theme.palette.text.primary}
                                mr={1}>
                                {/* {"<>"}  */}
                                I'm a
                            </Typography>
                            <Box
                                fontSize="1.5rem"
                                fontWeight={600}
                                color={theme.palette.text.primary}>
                                <Typewriter
                                    words={[
                                        "Full Stack Developer.",
                                        "UI/UX Designer.",
                                        "Freelancer.",
                                        "Student.",
                                    ]}
                                    loop={true}
                                    typeSpeed={150}
                                    // deleteSpeed={10}
                                    cursorColor={theme.palette.text.primary}
                                    cursor
                                    cursorBlinking={false}
                                />
                            </Box>
                            {/* <Typography
                                fontSize="1.5rem"
                                color={theme.palette.text.primary}
                                ml={1}>
                                {"</>"}
                            </Typography> */}
                        </Box>
                        <Typography
                            mt={2}
                            fontSize="1rem"
                            color={theme.palette.text.primary}>
                            Hey there! I'm a young full-stack developer based in
                            Brasov, Romania. I'm a student, but I also enjoy
                            freelancing in my free time. I work with various
                            technologies and I'd love to learn about your
                            projects.
                        </Typography>
                        <Box>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderRadius: 15,
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    px: 2.5,
                                    py: 2,
                                    mt: 3,
                                    ml: -1,
                                }}>
                                Contact Me
                                <ExpandMoreIcon
                                    fontSize="medium"
                                    sx={{ ml: 1, mt: -0.2 }}
                                />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
            {isSmallScreen && (
                <Box
                    zIndex={0}
                    width="100%"
                    display="flex"
                    flexDirection="column"
                    alignItems="center">
                    <Box
                        maxWidth={450}
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        p={5}>
                        <Box display="flex">
                            <Typography
                                fontSize="2.5rem"
                                fontWeight="600"
                                color={theme.palette.text.primary}
                                mr={2}>
                                Alex
                            </Typography>
                            <Typography
                                fontSize="2.5rem"
                                color={theme.palette.text.primary}>
                                Bleotu
                            </Typography>
                        </Box>
                        <Box display="flex" mt={1} alignItems="center">
                            <Typography
                                fontSize="1.15rem"
                                color={theme.palette.text.primary}
                                mr={1}>
                                {/* {"<>"}  */}
                                I'm a
                            </Typography>
                            <Box
                                fontSize="1.15rem"
                                fontWeight={600}
                                color={theme.palette.text.primary}>
                                <Typewriter
                                    words={[
                                        "Full Stack Developer.",
                                        "Photographer.",
                                        "Student.",
                                        "Freelancer.",
                                    ]}
                                    loop={true}
                                    typeSpeed={150}
                                    // deleteSpeed={10}
                                    cursorColor={theme.palette.text.primary}
                                    cursor
                                    cursorBlinking={false}
                                />
                            </Box>
                            {/* <Typography
                                fontSize="1.5rem"
                                color={theme.palette.text.primary}
                                ml={1}>
                                {"</>"}
                            </Typography> */}
                        </Box>
                        <Typography
                            mt={2}
                            fontSize="0.9rem"
                            color={theme.palette.text.primary}>
                            Hery there! I'm a young full-stack developer based
                            in Brasov, Romania. I'm a student, but I also enjoy
                            freelancing in my free time. I work with various
                            technologies and I'd love to learn about your
                            projects.
                        </Typography>
                        <Box>
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{
                                    borderRadius: 15,
                                    fontWeight: 600,
                                    px: 2.5,
                                    py: 2,
                                    mt: 3,
                                    ml: -1,
                                }}>
                                Contact Me
                                <ExpandMoreIcon
                                    fontSize="medium"
                                    sx={{ ml: 1, mt: -0.2 }}
                                />
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default Description;
