import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Footbar from "../../components/footbar";
import Line from "../../components/line";
import NavBar from "../../components/navbar";
import SideBar from "../../components/sidebar";
import About from "./about";
import Contact from "./contact";
import Description from "./description";
import Portofolio from "./portofolio";

const Home = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery("(max-width:450px)");

    const [open, setOpen] = useState(false);

    return (
        <Box bgcolor={theme.palette.background.default}>
            <NavBar action={() => setOpen(true)} />

            <SideBar
                state={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
            />

            <Box>
                <section id="description">
                    <Description />
                </section>

                <Line width={isSmallScreen ? "80%" : "80%"} />

                <section id="about">
                    <About />
                </section>

                <Line width={isSmallScreen ? "80%" : "80%"} />

                <section id="portofolio">
                    <Portofolio />
                </section>

                {/* <Line width={isSmallScreen ? "80%" : "80%"} />

                <section id="plans">
                    <Plans />
                </section> */}

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
