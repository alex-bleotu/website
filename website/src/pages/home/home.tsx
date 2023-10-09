import { Box, useTheme } from "@mui/material";
import Line from "../../components/line";
import NavBar from "../../components/navbar";
import About from "./about";
import Description from "./description";

const Home = () => {
    const theme = useTheme();

    return (
        <Box bgcolor={theme.palette.background.default}>
            <NavBar />
            <Box>
                <Description />
                <Line width="85%" />
                <About />
            </Box>
        </Box>
    );
};

export default Home;
