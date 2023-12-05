import {
    Category,
    Facebook,
    Instagram,
    LocalGroceryStore,
    People,
    Web,
} from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
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

export const WasteWiseFront = () => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box
                component={"img"}
                src={"/images/wastewise.png"}
                width={"85%"}
                height={"auto"}
            />
        </Box>
    );
};

export const WasteWiseBack = () => {
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
                WasteWise
            </Typography>
            <Box display="flex" justifyContent="center" mx={1}>
                <Grid container width={"86%"}>
                    <Grid
                        item
                        xs={6}
                        display="flex"
                        justifyContent="flex-start">
                        <Button
                            component="label"
                            variant="outlined"
                            startIcon={<Web />}
                            onClick={(event) => {
                                event.stopPropagation();
                                window.open(
                                    "https://wastewise.github.io/wastewise/",
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
                                Website
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
                                    "https://www.instagram.com/wastewise_company/",
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
                                    "https://www.facebook.com/profile.php?id=100093628350701",
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
                    WasteWise introduces WasteBin, an intelligent waste bin
                    designed to enhance waste management through automation.
                    This innovative product is capable of automatically sorting
                    various types of waste materials, making it a practical
                    solution for public spaces like schools, airports, shopping
                    centers, and street locations. WasteBin's main objective is
                    to simplify recycling processes and reduce the costs
                    associated with waste management, while also contributing to
                    environmental conservation and meeting European Union
                    objectives.
                    <br />
                    <br />
                    Key Features:
                    <Box my={2}>
                        <Box position="relative" mt={2}>
                            <Category
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>
                                Automated Waste Sorting
                            </b>
                            : Utilizes AI and sensor technology for precise
                            sorting of materials like plastic, metal, glass,
                            paper, and household waste.
                        </Box>
                        <Box position="relative" mt={2}>
                            <People
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>Targeted Users</b>:
                            Designed for places with high waste generation such
                            as malls, restaurants, and public institutions.
                        </Box>
                        <Box position="relative" mt={2}>
                            <LocalGroceryStore
                                sx={{ marginTop: 0.2, position: "absolute" }}
                            />
                            <b style={{ marginLeft: 30 }}>Market Potential</b>:
                            Focused initially on local deployment in Brașov,
                            with plans to expand to other major Romanian cities.
                        </Box>
                    </Box>
                    WasteWise aims to revolutionize waste management through
                    WasteBin, addressing both ecological concerns and the
                    practical challenges of recycling in urban environments.
                </Box>
            </Box>
        </Box>
    );
};
