import { Box, Typography, useTheme } from "@mui/material";

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

    return (
        <Box>
            <Typography
                variant="h5"
                gutterBottom
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                WasteWise
            </Typography>
        </Box>
    );
};
