import { useEffect, useState } from "react";

import {
    Box,
    CircularProgress,
    Typography,
    MenuItem,
    Select,
    FormControl,
    InputLabel
} from "@mui/material";

import {
    getAnalyticsOverview
} from "../../../api/analytics";

import AdminLayout from "../AdminLayout";

import SummaryCards from "./SummaryCards";
import DailyChart from "./DailyChart";
import TopProducts from "./TopProducts";
import TopSearches from "./TopSearches";
import FunnelCard from "./FunnelCard";
import RealtimeCard from "./RealtimeCard";

export default function AdminAnalytics() {

    const [loading, setLoading] = useState(true);

    const [days, setDays] = useState(7);

    const [overview, setOverview] = useState<any>(null);

    useEffect(() => {

        async function loadAnalytics() {

            try {

                setLoading(true);

                const res =
                    await getAnalyticsOverview(days);

                setOverview(res.overview);

            }

            catch (error) {

                console.error(error);

            }

            finally {

                setLoading(false);

            }

        }

        loadAnalytics();

    }, [days]);

    async function loadAnalytics() {

        try {

            setLoading(true);

            const res =
                await getAnalyticsOverview(days);

            setOverview(res.overview);

        }

        catch (error) {

            console.error(error);

        }

        finally {

            setLoading(false);

        }

    }

    return (

        <AdminLayout title="Analytics Dashboard">

            <Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: 4
                    }}
                >

                    <Typography
                        variant="h4"
                        sx={{
                            color: "#4A0E17",
                            fontWeight: 700,
                            fontFamily: '"Playfair Display", serif'
                        }}
                    >
                        Analytics Dashboard
                    </Typography>

                    <FormControl
                        size="small"
                        sx={{
                            width: 180
                        }}
                    >

                        <InputLabel>
                            Date Range
                        </InputLabel>

                        <Select

                            value={days}

                            label="Date Range"

                            onChange={(e) =>
                                setDays(Number(e.target.value))
                            }

                        >

                            <MenuItem value={7}>
                                Last 7 Days
                            </MenuItem>

                            <MenuItem value={30}>
                                Last 30 Days
                            </MenuItem>

                            <MenuItem value={90}>
                                Last 90 Days
                            </MenuItem>

                            <MenuItem value={180}>
                                Last 180 Days
                            </MenuItem>

                            <MenuItem value={365}>
                                Last 365 Days
                            </MenuItem>

                        </Select>

                    </FormControl>

                </Box>

                {loading ? (

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

                ) : (

                    <>

                        <SummaryCards

                            summary={overview.summary}

                        />

                        <DailyChart

                            data={overview.daily}

                        />

                        <TopProducts

                            products={overview.topProducts}

                        />

                        <TopSearches

                            searches={overview.searches}

                        />

                        <FunnelCard

                            funnel={overview.funnel}

                        />

                        <RealtimeCard

                            realtime={overview.realtime}

                        />

                    </>

                )}

            </Box>

        </AdminLayout>

    );

}