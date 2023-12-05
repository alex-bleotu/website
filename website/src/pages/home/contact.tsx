import SendIcon from "@mui/icons-material/Send";
import {
    Box,
    Button,
    Grid,
    TextField,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import Logo from "../../components/logo";
import { ThemeContext } from "../../style/themeContext";

const Contact = () => {
    const theme = useTheme();
    const { mode } = useContext(ThemeContext);
    const isExtraSmallScreen = useMediaQuery("(max-width:350px)");
    const isSmallScreen = useMediaQuery("(max-width:450px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");
    const isLargeScreen = useMediaQuery("(min-width:1200px)");

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
                    Contact
                </Typography>
            </Box>
            <Grid
                container
                width={isSmallScreen ? "100%" : isMediumScreen ? "90%" : "80%"}
                mt={2}>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    p={5}>
                    <TextField
                        required
                        id="outline-required"
                        label="Full Name"
                        defaultValue=""
                        variant="outlined"
                        // InputLabelProps={{ sx: { fontWeight: 600 } }}
                        InputProps={{ sx: { borderRadius: 10 } }}
                    />
                    <TextField
                        required
                        id="outline-required"
                        label="Email Address"
                        defaultValue=""
                        variant="outlined"
                        sx={{ my: 3 }}
                        // InputLabelProps={{
                        //     sx: { fontWeight: 600 },
                        // }}
                        InputProps={{ sx: { borderRadius: 10 } }}
                    />
                    <TextField
                        required
                        id="outline-required"
                        label="Message"
                        defaultValue=""
                        variant="outlined"
                        // InputLabelProps={{ sx: { fontWeight: 600 } }}
                        InputProps={{ sx: { borderRadius: 5 } }}
                        multiline
                        rows={5}
                    />
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{
                            borderRadius: 15,
                            fontWeight: 600,
                            borderWidth: 2,
                            width: isSmallScreen ? "100%" : 200,
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                height: 51.5,
                                borderRadius: "2px solid",
                                transform: "scale(1.01) translateY(-2px)",
                                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                            },
                            px: 2,
                            py: 1.5,
                            mt: 3,
                        }}>
                        Send Message
                        <SendIcon
                            fontSize="medium"
                            sx={{ ml: 1.5, mt: -0.2 }}
                        />
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={6}
                    display="flex"
                    flexDirection="column"
                    px={5}
                    pt={isSmallScreen ? 0 : 5}>
                    <Box
                        p={!isSmallScreen ? 4 : isExtraSmallScreen ? 2.5 : 3}
                        borderRadius={10}
                        border="1px solid"
                        height={isLargeScreen ? "57.5%" : "100%"}
                        borderColor={mode === "dark" ? grey[700] : grey[400]}
                        display="flex"
                        sx={{
                            ":hover": {
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            },
                        }}
                        flexDirection="column">
                        <Logo size={1.5} />
                        <Typography
                            fontSize="1rem"
                            fontWeight={600}
                            color={theme.palette.primary.main}>
                            Freelancer
                        </Typography>
                        <Box
                            display="flex"
                            flexDirection="column"
                            justifyContent="center">
                            <Box display="flex" mt={isLargeScreen ? 5 : 3}>
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}>
                                    AGE:{" "}
                                </span>
                                <span
                                    style={{
                                        color: theme.palette.text.primary,
                                        marginLeft: 5,
                                    }}>
                                    17
                                </span>
                            </Box>
                            <Box display="flex" mt={2}>
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}>
                                    RESIDENCE:{" "}
                                </span>
                                <span
                                    style={{
                                        color: theme.palette.text.primary,
                                        marginLeft: 5,
                                    }}>
                                    Brasov, {isSmallScreen ? "RO" : "Romania"}
                                </span>
                            </Box>
                            <Box display="flex" mt={2}>
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}>
                                    PHONE:{" "}
                                </span>{" "}
                                <span
                                    style={{
                                        color: theme.palette.text.primary,
                                        marginLeft: 5,
                                        fontSize: isExtraSmallScreen
                                            ? "0.9rem"
                                            : "1rem",
                                        marginTop: isExtraSmallScreen ? 1 : 0,
                                    }}>
                                    +40 756 775 906
                                </span>
                            </Box>
                            <Box display="flex" mt={2}>
                                <span
                                    style={{
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                    }}>
                                    EMAIL:{" "}
                                </span>{" "}
                                {!isSmallScreen && (
                                    <span
                                        style={{
                                            color: theme.palette.text.primary,
                                            marginLeft: 5,
                                        }}>
                                        alexbleotu2006@gmail.com
                                    </span>
                                )}
                            </Box>{" "}
                            {isSmallScreen && (
                                <span
                                    style={{
                                        color: theme.palette.text.primary,
                                        marginTop: 2,
                                        fontSize: isExtraSmallScreen
                                            ? "0.8rem"
                                            : "1rem",
                                    }}>
                                    alexbleotu2006@gmail.com
                                </span>
                            )}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;
