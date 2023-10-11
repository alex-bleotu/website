import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Line = ({ width, color }: { width: string; color?: string }) => {
    const { mode } = useContext(ThemeContext);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={8}
            mt={4}>
            <Box
                borderRadius={5}
                height={2}
                width={width}
                bgcolor={
                    color === undefined
                        ? mode === "dark"
                            ? grey[700]
                            : grey[400]
                        : color
                }
            />
        </Box>
    );
};

export default Line;
