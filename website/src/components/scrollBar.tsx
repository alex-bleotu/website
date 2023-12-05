import { GlobalStyles } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useTheme } from "@mui/material/styles";

const ScrollBar = () => {
    const theme = useTheme();
    const mode = theme.palette.mode;

    return (
        <GlobalStyles
            styles={{
                "*::-webkit-scrollbar": {
                    width: "0.5em",
                },
                "*::-webkit-scrollbar-track": {
                    backgroundColor: theme.palette.background.paper,
                },
                "*::-webkit-scrollbar-thumb": {
                    backgroundColor: mode === "light" ? grey[400] : grey[800],
                    borderRadius: "10px",
                },
            }}
        />
    );
};

export default ScrollBar;
