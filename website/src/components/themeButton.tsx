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
            sx={{ ml: 1 }}
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
