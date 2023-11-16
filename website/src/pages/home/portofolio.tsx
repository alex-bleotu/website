import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import PortofolioItem from "../../components/portofolioItem";

const Portofolio = () => {
    const theme = useTheme();

    const isMediumScreen = useMediaQuery("(max-width:900px)");
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
                width={
                    isSmallScreen
                        ? "90%"
                        : isMediumScreen
                        ? isSemiMediumScreen
                            ? "100%"
                            : "90%"
                        : "80%"
                }
                mt={2}>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} p={5}>
                    <PortofolioItem />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portofolio;
