import {
    AccessTime,
    Badge,
    EventNote,
    Sensors,
    Task,
} from "@mui/icons-material";
import Facebook from "@mui/icons-material/Facebook";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import GitHub from "@mui/icons-material/GitHub";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useState } from "react";

export const FarmCheckFront = () => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box component="img" src="/images/farmcheck.png" height="90%" />
        </Box>
    );
};

export const FarmCheckBack = () => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const isSmallScreen = useMediaQuery("(max-width:350px)");
    const [isLiked, setIsLiked] = useState(false);

    return (
        <Box height="100%">
            <Typography
                variant="h5"
                mt={isMediumScreen ? 3 : 4}
                mb={isMediumScreen ? 2 : 3}
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                FarmCheck
            </Typography>
            <Box display="flex" justifyContent="center" mx={1}>
                <Grid container width={"86%"}>
                    <Grid
                        item
                        xs={8}
                        display="flex"
                        justifyContent="flex-start">
                        <Button
                            component="label"
                            variant="outlined"
                            startIcon={<GitHub />}
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open(
                                    "https://github.com/in-th3-l00p/farmcheck-remastered",
                                    "_blank"
                                );
                            }}
                            sx={{
                                borderRadius: 15,
                                fontWeight: 600,
                                border: "2px solid",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    border: "2px solid",
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                                px: 2.5,
                                py: 0.5,
                            }}>
                            <Typography
                                fontSize={isMediumScreen ? "0.85rem" : "1rem"}
                                textAlign="left"
                                style={{ textTransform: "none" }}
                                color={theme.palette.text.primary}>
                                GitHub
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            size="small"
                            sx={{
                                ml: "auto",
                                transition: "transform 0.3s, box-shadow 0.3s",
                                color: theme.palette.text.primary,
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                            onClick={(event) => {
                                event.stopPropagation();
                                //open link
                                window.open(
                                    "https://www.facebook.com/profile.php?id=100082887925151",
                                    "_blank"
                                );
                            }}>
                            <Facebook fontSize="medium" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            size="small"
                            sx={{
                                ml: "auto",
                                color: theme.palette.text.primary,
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            }}
                            onClick={(event) => {
                                setIsLiked(!isLiked);
                                event.stopPropagation();
                            }}>
                            {isLiked ? (
                                <Favorite fontSize="medium" color="error" />
                            ) : (
                                <FavoriteBorder fontSize="medium" />
                            )}
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
            <Box
                overflow="scroll"
                height={isSmallScreen ? "55%" : "64%"}
                mt={2.5}
                mx={1}
                style={{
                    overflowX: "hidden",
                }}>
                <Box
                    px={isMediumScreen ? 2 : 3}
                    fontSize={isMediumScreen ? "0.85rem" : "1rem"}
                    textAlign="left"
                    style={{ textTransform: "none" }}
                    color={theme.palette.text.primary}>
                    FarmCheck is a revolutionary platform designed to streamline
                    communication and maintenance in agriculture. It's an ideal
                    tool for anyone owning agricultural land, from seasoned
                    farmers to newcomers in the field. Here's what FarmCheck
                    offers:
                    <Box my={2}>
                        <Box position="relative" mt={2}>
                            <EventNote
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Real-time Monitoring
                            </b>
                            : Using IoT technology, FarmCheck provides sensors
                            that deliver instant data on soil and air
                            temperature and humidity, viewable on its
                            application.
                        </Box>
                        <Box position="relative" mt={2}>
                            <Task
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>Task Management</b>:
                            The platform enables the indexing of farm personnel
                            and organizes their tasks effectively through a chat
                            system or task management tools.
                        </Box>
                        <Box position="relative" mt={2}>
                            <Badge
                                sx={{ marginTop: -0.1, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Employee Management
                            </b>
                            : FarmCheck simplifies managing farm employees and
                            assigning tasks, ensuring smooth operations
                        </Box>
                        <Box position="relative" mt={2}>
                            <AccessTime
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Parking Time Monitoring
                            </b>
                            : A unique feature offering detailed information
                            about cultivating 40 different plants, supporting
                            informed farming decisions.
                        </Box>
                        <Box position="relative" mt={2}>
                            <Sensors
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Sensor Installation
                            </b>
                            : Users can easily install farm sensors, connect
                            them to WiFi, and start receiving data after
                            entering an access code.
                        </Box>
                    </Box>
                    Technologically, FarmCheck utilizes Spring Boot for backend
                    integration, PostgreSQL for data persistence, Redis for
                    storing less critical, high-volume data, and React Native
                    with TypeScript for a cross-platform mobile application. The
                    sensor technology is developed in Arduino IDE for the ESP32
                    microcontroller.
                    <br />
                    <br />
                    FarmCheck stands out for its affordability, utility, and
                    user-friendly interface, making it a significant advancement
                    in agricultural digitization. It's proven its worth in
                    real-world scenarios, offering remote land management
                    capabilities that are both efficient and accessible.
                </Box>
            </Box>
        </Box>
    );
};
