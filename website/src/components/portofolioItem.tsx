import { Box, Button, useTheme } from "@mui/material";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const PortofolioItem = () => {
    const theme = useTheme();
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            width="100%">
            <ReactCardFlip
                isFlipped={isFlipped}
                flipDirection="horizontal"
                containerStyle={{
                    height: "100%",
                    width: "100%",
                    maxWidth: 600,
                    maxHeight: 800,
                }}>
                <Button
                    onClick={() => setIsFlipped(true)}
                    sx={{
                        p: 0,
                        borderRadius: 10,
                        width: "100%",
                        height: "auto",
                        aspectRatio: "0.75",
                        maxWidth: 600,
                        maxHeight: 800,
                    }}>
                    <Box
                        bgcolor={theme.palette.background.paper}
                        height="99%"
                        width="100%"
                        borderRadius={10}
                        sx={{
                            aspectRatio: "0.75",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.01) translateY(-2px)",
                                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                            },
                        }}>
                        Front
                    </Box>
                </Button>
                <Button
                    onClick={() => setIsFlipped(false)}
                    sx={{
                        p: 0,
                        borderRadius: 10,
                        width: "100%",
                        height: "auto",
                        maxWidth: 600,
                        maxHeight: 800,
                        aspectRatio: "0.75",
                    }}>
                    <Box
                        bgcolor={theme.palette.background.paper}
                        height="99%"
                        width="100%"
                        borderRadius={10}
                        sx={{
                            aspectRatio: "0.75",
                            transition: "transform 0.3s, box-shadow 0.3s",
                            "&:hover": {
                                transform: "scale(1.01) translateY(-2px)",
                                boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
                            },
                        }}>
                        Back
                    </Box>
                </Button>
            </ReactCardFlip>
        </Box>
    );
};

export default PortofolioItem;
