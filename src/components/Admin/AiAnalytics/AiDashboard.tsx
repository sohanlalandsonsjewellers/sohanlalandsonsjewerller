import { useEffect, useState } from "react";

import {

    Box,

    CircularProgress,

    Typography

} from "@mui/material";

import AdminLayout from "../AdminLayout";

import {

    getBusinessSummary,

    BusinessSummaryResponse

} from "../../../api/ai";

import AiBusinessSummary from "./AiBusinessSummary";

export default function AiDashboard() {

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        summary,

        setSummary

    ] = useState<BusinessSummaryResponse | null>(null);

    useEffect(() => {

        loadDashboard();

    }, []);

    async function loadDashboard() {

        try {

            setLoading(true);

            const response = await getBusinessSummary();

            setSummary(response);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <AdminLayout title="AI Dashboard">

            <Box>

                <Typography

                    variant="h4"

                    sx={{

                        color: "#4A0E17",

                        fontWeight: 700,

                        mb: 4,

                        fontFamily: '"Playfair Display", serif'

                    }}

                >

                    🤖 AI Dashboard

                </Typography>

                {

                    loading

                        ?

                        (

                            <Box

                                sx={{

                                    height: "70vh",

                                    display: "flex",

                                    justifyContent: "center",

                                    alignItems: "center"

                                }}

                            >

                                <CircularProgress />

                            </Box>

                        )

                        :

                        (

                            summary &&

                            <AiBusinessSummary

                                data={summary}

                            />

                        )

                }

            </Box>

        </AdminLayout>

    );

}