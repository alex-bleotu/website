import { Box, useTheme } from "@mui/material";

const MenuButton = () => {
    const theme = useTheme();

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-end" mx={1}>
            <Box
                borderRadius={20}
                width={35}
                height={4}
                bgcolor={theme.palette.text.primary}
            />
            <Box
                borderRadius={20}
                width={25}
                height={4}
                my={0.8}
                bgcolor={theme.palette.text.primary}
            />
            <Box
                borderRadius={20}
                width={15}
                height={4}
                bgcolor={theme.palette.text.primary}
            />
        </Box>
    );
};

export default MenuButton;
