import ListItemDecorator from "@mui/joy/ListItemDecorator";
import {
    Box,
    List,
    ListItem,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";

export const FarmCheckFront = () => {
    return (
        <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center">
            <Box
                component={"img"}
                src={"/images/farmcheck.png"}
                height={"90%"}
            />
        </Box>
    );
};

export const FarmCheckBack = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box p={isSmallScreen ? 3 : 4}>
            <Typography
                variant="h5"
                mb={isSmallScreen ? 2 : 4}
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                FarmCheck
            </Typography>
            <Typography
                mb={4}
                textAlign="left"
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                FarmCheck is a web application that helps farmers to monitor
                their crops, workers and tasks. It is built using ReactJS,
                Redux, and Spring.
            </Typography>
            <Typography
                mb={4}
                textAlign="left"
                style={{ textTransform: "none" }}
                color={theme.palette.text.primary}>
                https://github.com/in-th3-l00p/farmcheck-remastered
            </Typography>
            <List aria-labelledby="decorated-list-demo">
                <ListItem>
                    <ListItemDecorator>💻</ListItemDecorator> Front-end
                </ListItem>
                <ListItem>
                    <ListItemDecorator>🛠️</ListItemDecorator> Product building
                </ListItem>
                <ListItem>
                    <ListItemDecorator>🤖</ListItemDecorator> Embedded
                </ListItem>
            </List>
        </Box>
    );
};
