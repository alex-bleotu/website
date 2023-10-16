import { Box, useMediaQuery, useTheme } from "@mui/material";
import Footbar from "../../components/footbar";
import Line from "../../components/line";
import NavBar from "../../components/navbar";
import About from "./about";
import Contact from "./contact";
import Description from "./description";

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    return (
        <Box bgcolor={theme.palette.background.default} height="100%">
            <NavBar />

            <Box>
                <section id="description">
                    <Description />
                </section>

                <Line width={isSmallScreen ? "80%" : "80%"} />

                <section id="about">
                    <About />
                </section>

                <Line width={isSmallScreen ? "80%" : "80%"} />

                <section id="contact">
                    <Contact />
                </section>
            </Box>

            <Footbar />
        </Box>
    );
};

export default Home;
