import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import PortofolioItem from "../../components/portofolioItem";
import { FarmCheckBack, FarmCheckFront } from "./portofolio/farmcheck";
import { ParkFlowBack, ParkFlowFront } from "./portofolio/parkflow";
import { WasteWiseBack, WasteWiseFront } from "./portofolio/wastewise";

const Portofolio = () => {
    const theme = useTheme();

    const isLargeScreen = useMediaQuery("(max-width:1500px)");
    const isSemiMediumScreen = useMediaQuery("(max-width:700px)");
    const isSmallScreen = useMediaQuery("(max-width:580px)");

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
                    Portofolio
                </Typography>
            </Box>
            <Grid
                container
                display="flex"
                justifyContent="center"
                width={
                    isSmallScreen
                        ? "100%"
                        : isLargeScreen
                        ? isSemiMediumScreen
                            ? "100%"
                            : "90%"
                        : "80%"
                }
                mt={2}>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    p={isSmallScreen ? 4 : isLargeScreen ? 3 : 5}
                    display="flex"
                    justifyContent="center">
                    <PortofolioItem>
                        <ParkFlowFront />
                        <ParkFlowBack />
                    </PortofolioItem>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    p={isSmallScreen ? 4 : isLargeScreen ? 3 : 5}
                    display="flex"
                    justifyContent="center">
                    <PortofolioItem>
                        <FarmCheckFront />
                        <FarmCheckBack />
                    </PortofolioItem>
                </Grid>
                <Grid
                    item
                    xs={12}
                    lg={4}
                    p={isSmallScreen ? 4 : isLargeScreen ? 3 : 5}
                    display="flex"
                    justifyContent="center">
                    <PortofolioItem>
                        <WasteWiseFront />
                        <WasteWiseBack />
                    </PortofolioItem>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portofolio;
