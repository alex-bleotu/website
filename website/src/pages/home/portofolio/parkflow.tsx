import { Box, Typography, useTheme } from "@mui/material";

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

    return (
        <Box>
            <Typography
                variant="h5"
                gutterBottom
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                ParkFlow
            </Typography>
        </Box>
    );
};
