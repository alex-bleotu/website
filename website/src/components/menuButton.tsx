import { Box, Button, useTheme } from "@mui/material";

const MenuButton = ({ action }: { action: any }) => {
    const theme = useTheme();

    return (
        <Button onClick={action} sx={{ borderRadius: 50 }}>
            <Box display="flex" flexDirection="column" alignItems="flex-end">
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
        </Button>
    );
};

export default MenuButton;
