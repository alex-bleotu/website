import {
    CircularProgress as Bar,
    Box,
    Typography,
    useTheme,
} from "@mui/material";

const CircularProgress = ({ progress }: { progress: number }) => {
    const theme = useTheme();

    return (
        <Box
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width={55}
            borderRadius="50%"
            sx={{
                ":hover": {
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                        transform: "scale(1.01) translateY(-2px)",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    },
                },
            }}>
            <Bar variant="determinate" value={progress} size={55} />
            <Typography
                fontSize="0.95rem"
                color={theme.palette.text.primary}
                position="absolute">
                {progress}%
            </Typography>
        </Box>
    );
};

export default CircularProgress;
