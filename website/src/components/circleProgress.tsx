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
            width={55}>
            <Bar variant="determinate" value={progress} size={55} />
            <Typography
                fontSize="0.95rem"
                fontWeight={600}
                color={theme.palette.text.primary}
                position="absolute">
                {progress}%
            </Typography>
        </Box>
    );
};

export default CircularProgress;
