import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

export const ThemeButton = () => {
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

export const ThemeButtonText = () => {
    const { changeTheme } = useContext(ThemeContext);
    const theme = useTheme();

    return (
        <Button
            color="inherit"
            onClick={() => {
                changeTheme();
            }}
            sx={{
                minWidth: 130,
                fontWeight: 600,
                borderRadius: 20,
                px: 2.5,
                py: 1.5,
                my: 1,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                    transform: "scale(1.01) translateY(-2px)",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
                },
            }}>
            <Box width="100%" display="flex" fontSize={"1rem"}>
                <Box
                    ml="auto"
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    position="relative"
                    justifyContent="center">
                    <Box mr={1}>
                        {theme.palette.mode === "dark" ? (
                            <Brightness7Icon
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    right: 65,
                                }}
                            />
                        ) : (
                            <Brightness4Icon
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    right: 65,
                                }}
                            />
                        )}
                    </Box>
                    <Box>Theme</Box>
                </Box>
            </Box>
        </Button>
    );
};
