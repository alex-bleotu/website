import { Typography, useTheme } from "@mui/material";

const Logo = ({ size }: { size: number }) => {
    const theme = useTheme();

    return (
        <Typography
            fontFamily="revert"
            fontSize={size + "rem"}
            color={theme.palette.text.primary}>
            <span style={{ fontWeight: 600 }}>Alex</span> Bleotu
        </Typography>
    );
};

export default Logo;
