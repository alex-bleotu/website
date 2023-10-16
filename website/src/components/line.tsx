import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const Line = ({
    width,
    color,
    margin = true,
}: {
    width: string;
    color?: string;
    margin?: boolean;
}) => {
    const { mode } = useContext(ThemeContext);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={margin ? 8 : 0}
            mt={margin ? 4 : 0}>
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
