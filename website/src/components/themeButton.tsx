import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const ThemeButton = () => {
    const theme = useTheme();
    const { changeTheme } = useContext(ThemeContext);

    return (
        <IconButton
            sx={{
                mx: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.01) translateY(-2px)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                },
            }}
            onClick={() => {
                changeTheme();
            }}
            color="inherit">
            {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
            ) : (
                <Brightness4Icon />
            )}
        </IconButton>
    );
};

export default ThemeButton;
