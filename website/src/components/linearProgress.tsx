import {
    LinearProgress as Bar,
    Box,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const LinearProgress = ({
    icon,
    progress,
    name,
    delay,
}: {
    icon: string;
    progress: number;
    name: string;
    delay: number;
}) => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    const [value, setValue] = useState(0);
    const [start, setStart] = useState(false);

    const timerDuration = 500 / progress;

    useEffect(() => {
        if (!start) return;

        // @ts-ignore
        const delayTimer = setTimeout(() => {
            const timer = setInterval(() => {
                setValue((prevProgress) =>
                    prevProgress < progress ? prevProgress + 1 : progress
                );
                if (value === progress) clearInterval(timer);
            }, timerDuration);

            setTimeout(() => {
                clearInterval(timer);
            }, 1500);

            return () => {
                clearInterval(timer);
            };
        }, delay);
    }, [start]);

    return (
        <Grid
            container
            display="flex"
            flexDirection="row"
            alignItems="center"
            py={2}
            pr={isSmallScreen ? 0 : 4}>
            <Grid
                item
                xs={3.5}
                sm={3}
                lg={4.5}
                xl={3.2}
                display="flex"
                justifyContent={"center"}>
                <Box>
                    <Box
                        component="img"
                        height={isSmallScreen ? 50 : 65}
                        sx={{
                            aspectRatio: 1,
                            ":hover": {
                                transition: "transform 0.3s, box-shadow 0.3s",
                                "&:hover": {
                                    transform: "scale(1.01) translateY(-2px)",
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            },
                        }}
                        src={"./icons/" + icon + ".png"}
                    />
                </Box>
            </Grid>
            <ReactVisibilitySensor partialVisibility>
                {({
                    // @ts-ignore
                    isVisible,
                }) => {
                    if (isVisible) setStart(true);

                    return (
                        <Grid item xs={8.5} sm={9} lg={7.5} xl={8.8} mt={1}>
                            <Typography
                                fontSize={isSmallScreen ? "1rem" : "1.2rem"}
                                fontWeight={600}
                                color={theme.palette.text.primary}>
                                {name}
                            </Typography>
                            <Box position="relative">
                                {isVisible ? (
                                    <Bar
                                        variant="determinate"
                                        value={value}
                                        sx={{ my: 2, borderRadius: 10 }}
                                    />
                                ) : (
                                    <Bar
                                        variant="determinate"
                                        value={value}
                                        sx={{ my: 2, borderRadius: 10 }}
                                    />
                                )}
                                <CountUp
                                    useEasing={false}
                                    enableScrollSpy
                                    scrollSpyDelay={delay}
                                    scrollSpyOnce
                                    style={{
                                        position: "absolute",
                                        right: 0,
                                        top: -20,
                                        fontSize: "0.75rem",
                                        color: theme.palette.text.primary,
                                    }}
                                    end={progress}
                                    duration={1}
                                    suffix="%"
                                />
                            </Box>
                        </Grid>
                    );
                }}
            </ReactVisibilitySensor>
        </Grid>
    );
};

export default LinearProgress;
