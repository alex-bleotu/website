import { Alert, AlertColor } from "@mui/material";
import { useEffect, useState } from "react";

const Message = ({
    variant,
    message,
    setShow: disappear,
}: {
    variant: AlertColor | undefined;
    message: string;
    setShow: (arg0: boolean) => void;
}) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShow(false);
            disappear(false);
        }, 5000);

        return () => {
            clearTimeout(timeId);
        };
    }, []);

    if (!show) {
        return null;
    }

    return (
        <Alert sx={{ mt: 2, mb: -1, borderRadius: 20 }} severity={variant}>
            {message}
        </Alert>
    );
};

Message.defaultPros = {
    variant: "info",
};

export default Message;
