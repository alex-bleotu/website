import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";
import { createContext, useEffect, useState } from "react";
import Loading from "../pages/loading";

const hexToRGBA = (hex: string, alpha: number) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
};

const getDesignTokens = (mode: "dark" | "light") => ({
    palette: {
        mode,
        primary: {
            ...(mode === "light" && {
                main: cyan[600],
                ...purple,
            }),
            ...(mode === "dark" && {
                main: purple[200],
                ...purple,
            }),
        },
        text: {
            ...(mode === "light" && {
                primary: "#2c2c2c",
            }),
            ...(mode === "dark" && {
                primary: "#f2f2f2",
            }),
        },
        ...(mode === "light" && {
            background: {
                default: "#f6f6f6",
                paper: "#eaeaea",
                // light grey
                semi: hexToRGBA("#f6f6f6", 0.5),
                scrollBar: "#000000",
            },
        }),
        ...(mode === "dark" && {
            background: {
                default: "#191b1c",
                paper: "#262829",
                semi: hexToRGBA("#212121", 0.5),
                scrollBar: "#2c2c2c",
            },
        }),
    },
});

const darkTheme = createTheme(getDesignTokens("dark"));
const lightTheme = createTheme(getDesignTokens("light"));

export const ThemeContext = createContext<any>(null);

const ThemeProvider = ({ children }: any) => {
    const [mode, setMode] = useState<"light" | "dark" | null>(null);

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (localTheme === null) localStorage.setItem("theme", "dark");
        else localTheme && setMode(localTheme as "light" | "dark");
    }, []);

    const changeTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("theme", mode === "light" ? "dark" : "light");
    };

    if (mode === null) return <Loading />;

    return (
        <ThemeContext.Provider value={{ changeTheme, mode }}>
            <MUIThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
