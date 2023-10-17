import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import CountUp from "react-countup";
import { ThemeContext } from "../context/themeContext";

const AboutItem = ({
    text,
    number,
    icon,
}: {
    text: string;
    number: number;
    icon: any;
}) => {
    const theme = useTheme();
    const { mode } = useContext(ThemeContext);

    const isSmallScreen = useMediaQuery("(max-width:450px)");
    const isMediumScreen = useMediaQuery("(max-width:900px)");

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb={isMediumScreen ? 4 : 0}>
            <Box
                width={isSmallScreen ? "100%" : "90%"}
                sx={{
                    border: "2px solid",
                    borderColor: mode === "dark" ? grey[700] : grey[400],
                    borderRadius: 10,
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                        transform: "scale(1.01) translateY(-2px)",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                    },
                }}
                pt={1.5}
                pb={2}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center">
                <Box pt={2} />
                {icon}
                <Typography
                    fontSize={"1.05rem"}
                    color={theme.palette.text.primary}
                    sx={{ marginTop: 2 }}>
                    {text}
                </Typography>
                <CountUp
                    enableScrollSpy
                    scrollSpyOnce
                    style={{ fontSize: "2.5rem", marginTop: 1 }}
                    end={number}
                    duration={2}
                />
            </Box>
        </Box>
    );
};

export default AboutItem;
