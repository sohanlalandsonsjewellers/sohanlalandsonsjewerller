import {

    Paper,

    Typography,

    Stack

} from "@mui/material";

interface Props{

    title:string;

    subtitle?:string;

    children:React.ReactNode;

}

export default function ExecutiveSection({

    title,

    subtitle,

    children

}:Props){

    return(

        <Paper

            elevation={2}

            sx={{

                p:3,

                borderRadius:4

            }}

        >

            <Stack

                spacing={3}

            >

                <Stack>

                    <Typography

                        variant="h5"

                        fontWeight={700}

                    >

                        {title}

                    </Typography>

                    {

                        subtitle && (

                            <Typography

                                color="text.secondary"

                            >

                                {subtitle}

                            </Typography>

                        )

                    }

                </Stack>

                {children}

            </Stack>

        </Paper>

    );

}