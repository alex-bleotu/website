import { CircularProgress as Bar, Box, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";

const CircularProgress = ({
    progress,
    delay,
}: {
    progress: number;
    delay: number;
}) => {
    const theme = useTheme();

    const [value, setValue] = useState(0);
    const [start, setStart] = useState(false);

    const timerDuration = 250 / progress;

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
        <ReactVisibilitySensor partialVisibility>
            {({
                // @ts-ignore
                isVisible,
            }) => {
                if (isVisible) setStart(true);

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
                                    boxShadow:
                                        "0px 10px 20px rgba(0, 0, 0, 0.1)",
                                },
                            },
                        }}>
                        {isVisible ? (
                            <Bar
                                variant="determinate"
                                value={value}
                                size={55}
                            />
                        ) : (
                            <Bar
                                variant="determinate"
                                value={value}
                                size={55}
                            />
                        )}
                        <CountUp
                            useEasing={false}
                            enableScrollSpy
                            scrollSpyDelay={delay}
                            scrollSpyOnce
                            style={{
                                position: "absolute",
                                fontSize: "0.95rem",
                                color: theme.palette.text.primary,
                            }}
                            end={progress}
                            duration={1}
                            suffix="%"
                        />
                    </Box>
                );
            }}
        </ReactVisibilitySensor>
    );
};

export default CircularProgress;
