import {
    Box,
    Button,
    Typography,
} from "@mui/material";

import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

interface Props {

    title?: string;

    description?: string;

    onRetry?: () => void;

}

const EmptyState = ({

    title = "No Business Data",

    description = "There is no business data available yet.",

    onRetry,

}: Props) => {

    return (

        <Box

            display="flex"

            flexDirection="column"

            justifyContent="center"

            alignItems="center"

            py={8}

        >

            <Inventory2OutlinedIcon

                sx={{

                    fontSize: 70,

                    color: "text.secondary",

                    mb: 2,

                }}

            />

            <Typography

                variant="h5"

                fontWeight={700}

            >

                {title}

            </Typography>

            <Typography

                color="text.secondary"

                mb={3}

            >

                {description}

            </Typography>

            {

                onRetry && (

                    <Button

                        variant="contained"

                        onClick={onRetry}

                    >

                        Retry

                    </Button>

                )

            }

        </Box>

    );

};

export default EmptyState;