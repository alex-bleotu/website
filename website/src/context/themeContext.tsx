import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material";
import { cyan, purple } from "@mui/material/colors";
import { createContext, useEffect, useState } from "react";
import Loading from "../pages/loading";

const getDesignTokens = (mode: "dark" | "light") => ({
    palette: {
        mode,
        primary: {
            ...(mode === "light" && {
                main: cyan[400],
                ...purple,
            }),
            ...(mode === "dark" && {
                main: purple[200],
                ...purple,
            }),
        },
        // secondary: {
        //     ...(mode === "light" && {
        //         main: purple[200],
        //         ...purple,
        //     }),
        //     ...(mode === "dark" && {
        //         main: purple[200],
        //         ...purple,
        //     }),
        // },
        ...(mode === "light" && {
            background: {
                default: "#f2f2f2",
                paper: "#f2f2f2",
            },
        }),
        ...(mode === "dark" && {
            background: {
                default: "212121",
                paper: "#424242",
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
