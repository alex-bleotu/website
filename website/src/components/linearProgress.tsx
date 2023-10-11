import {
    LinearProgress as Bar,
    Box,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

const LinearProgress = ({
    icon,
    progress,
    name,
}: {
    icon: string;
    progress: number;
    name: string;
}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            alignItems="center"
            py={2}
            pr={isSmallScreen ? 0 : 4}>
            <Grid item xs={3.5} sm={3} lg={4.5} xl={3}>
                <Box>
                    <Box
                        component="img"
                        height={isSmallScreen ? 50 : 65}
                        sx={{ aspectRatio: 1 }}
                        src={"./icons/" + icon + ".png"}
                    />
                </Box>
            </Grid>
            <Grid item xs={8.5} sm={9} lg={7.5} xl={9} mt={1}>
                <Typography
                    fontSize={isSmallScreen ? "1rem" : "1.2rem"}
                    fontWeight={600}
                    color={theme.palette.text.primary}>
                    {name}
                </Typography>
                <Box position="relative">
                    <Bar
                        variant="determinate"
                        value={progress}
                        sx={{ my: 2, borderRadius: 10 }}
                    />
                    <Typography
                        position="absolute"
                        right={0}
                        top={-20}
                        fontSize="0.75rem"
                        color={theme.palette.text.primary}>
                        {progress}%
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default LinearProgress;
