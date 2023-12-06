import { AccessTime, BookOnline, Payment } from "@mui/icons-material";
import Facebook from "@mui/icons-material/Facebook";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import Map from "@mui/icons-material/Map";
import {
    Box,
    Button,
    Grid,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export const ParkFlowFront = () => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box
                component={"img"}
                src={"/images/parkflow.png"}
                height={"90%"}
            />
        </Box>
    );
};

export const ParkFlowBack = () => {
    const theme = useTheme();
    const isMediumScreen = useMediaQuery("(max-width:800px)");
    const isSmallScreen = useMediaQuery("(max-width:350px)");
    // const [isLiked, setIsLiked] = useState(false);

    return (
        <Box height="100%">
            <Typography
                variant="h5"
                mt={isMediumScreen ? 3 : 4}
                mb={isMediumScreen ? 2 : 3}
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                ParkFlow
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
                                    "https://github.com/DpitBv2/parkflow",
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
                                    "https://www.instagram.com/parkflow.ro/",
                                    "_blank"
                                );
                            }}>
                            <Instagram fontSize="medium" />
                        </IconButton>
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
                                    "https://www.facebook.com/parkflowbv/",
                                    "_blank"
                                );
                            }}>
                            <Facebook fontSize="medium" />
                        </IconButton>
                    </Grid>
                    {/* <Grid item xs={2}>
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
                    </Grid> */}
                </Grid>
            </Box>
            <Box
                overflow="scroll"
                height={isSmallScreen ? "55%" : "64%"}
                mt={2.5}
                mx={2}
                style={{
                    overflowX: "hidden",
                }}>
                <Box
                    px={isMediumScreen ? 2 : 3}
                    fontSize={isMediumScreen ? "0.85rem" : "1rem"}
                    textAlign="left"
                    style={{ textTransform: "none" }}
                    color={theme.palette.text.primary}>
                    ParkFlow is a cutting-edge application designed to alleviate
                    urban traffic by utilizing intelligent parking sensors. This
                    app provides real-time updates on available parking spaces,
                    helping users navigate directly to open spots. Key features
                    include:
                    <Box my={2}>
                        <Box position="relative" mt={2}>
                            <BookOnline
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Parking Space Reservation
                            </b>
                            : Users can pre-book a parking spot, ensuring
                            availability upon arrival and saving time.
                        </Box>
                        <Box position="relative" mt={2}>
                            <Map
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>Interactive Map</b>: A
                            user-friendly map displays real-time information
                            about available parking spaces, simplifying the
                            search for a convenient spot.
                        </Box>
                        <Box position="relative" mt={2}>
                            <Payment
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>Parking Payment</b>:
                            The app allows for easy and secure parking payments,
                            eliminating the need for cash and reducing the risk
                            of parking violations.
                        </Box>
                        <Box position="relative" mt={2}>
                            <AccessTime
                                sx={{ marginTop: 0.1, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Parking Time Monitoring
                            </b>
                            : Users can track their parking duration, helping to
                            manage time and avoid penalties.
                        </Box>
                    </Box>
                    On the technical side, ParkFlow uses React Native for the
                    front end and Spring with PostgreSQL for the backend. The
                    hardware consists of sensors and hubs. Sensors, installed in
                    each parking space, monitor availability and communicate
                    with the hubs via LoRa protocol. Hubs, in turn, connect
                    these sensors to the central server, facilitating real-time
                    data transfer and offering a cash payment option for users
                    preferring traditional methods. This comprehensive system
                    streamlines parking management, making urban driving more
                    efficient and less stressful.
                </Box>
            </Box>
        </Box>
    );
};
