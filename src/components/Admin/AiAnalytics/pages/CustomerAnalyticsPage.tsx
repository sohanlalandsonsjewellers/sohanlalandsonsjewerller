import {
    Alert,
    Box,
    Button,
    Grid,
    Stack
} from "@mui/material";

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

// NOTE: paths below match your confirmed file location
// src/components/Admin/AiAnalytics/pages/CustomerAnalyticsPage.tsx
import AdminLayout from "../../AdminLayout";
import useCustomerAnalytics from "../../../../hooks/useCustomerAnalytics";

import DashboardHeader from "../components/common/DashboardHeader";
import LoadingScreen from "../components/common/LoadingScreen";
import ErrorState from "../components/common/ErrorState";
import EmptyState from "../components/common/EmptyState";

import CustomerHero from "../components/CustomerAnalytics/CustomerHero";
import CustomerFilters from "../components/CustomerAnalytics/CustomerFilters";
import CustomerSummaryCards from "../components/CustomerAnalytics/CustomerSummaryCards";
import SegmentDistribution from "../components/CustomerAnalytics/SegmentDistribution";
import CustomerTrendChart from "../components/CustomerAnalytics/CustomerTrendChart";
import TopCustomersCard from "../components/CustomerAnalytics/TopCustomersCard";
import CustomerRecommendations from "../components/CustomerAnalytics/CustomerRecommendations";
import CustomerTable from "../components/CustomerAnalytics/CustomerTable";
import { CustomerAnalyticsParams } from "../../../../api/ai/customerAnalytics";

export default function CustomerAnalyticsPage() {

    const {
        data,
        loading,
        error,
        params,
        refresh,
        search,
        setDays,
        setSort,
        setPage,
        setSegment,
        setCustomerType,
        setAtRisk
    } = useCustomerAnalytics();

    const hasCustomers = !!data?.data?.length;

    /* =======================================================
       EXPORT CSV
       Exports the currently loaded page of customers with
       the columns visible in the Customer Directory table.
    ======================================================= */

    function handleExportCSV() {

        if (!data?.data?.length) return;

        const headers = [
            "Name",
            "Email",
            "Phone",
            "Segment",
            "Rank",
            "Status",
            "Total Orders",
            "Total Spent",
            "Avg Order Value",
            "Revenue Contribution %",
            "Last Order"
        ];

        const rows = data.data.map((c) => [
            c.name,
            c.email,
            c.phone,
            c.segment,
            c.lifetimeRank,
            c.customerStatus,
            c.totalOrders,
            c.totalSpent,
            c.averageOrderValue,
            c.revenueContribution,
            c.lastOrder ? new Date(c.lastOrder).toLocaleDateString() : ""
        ]);

        const csvContent = [headers, ...rows]
            .map((row) =>
                row
                    .map((val) => `"${String(val ?? "").replace(/"/g, '""')}"`)
                    .join(",")
            )
            .join("\n");

        const blob = new Blob(["\uFEFF" + csvContent], {
            type: "text/csv;charset=utf-8;"
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = `customer-analytics-${new Date()
            .toISOString()
            .slice(0, 10)}.csv`;

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);

    }

    function handleResetFilters() {

        search("");
        setSegment(undefined);
        setCustomerType(undefined);
        setAtRisk(false);

    }

    // Poore page ka pehla load abhi tak nahi hua aur error bhi aa gaya
    // (retry ke alawa dikhane ko kuch nahi) — poori screen ErrorState dikhao.
    if (error && !data) {

        return (

            <AdminLayout title="Customer Analytics">

                <ErrorState
                    title="Unable to Load Customer Analytics"
                    message={error}
                    onRetry={refresh}
                />

            </AdminLayout>

        );

    }

    // Pehla load chal raha hai — poori screen LoadingScreen dikhao.
    if (loading && !data) {

        return (

            <AdminLayout title="Customer Analytics">

                <LoadingScreen
                    title="Loading Customer Analytics"
                    subtitle="AI is analysing your customer data..."
                />

            </AdminLayout>

        );

    }

    return (

        <AdminLayout title="Customer Analytics">

            <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 } }}>

                <DashboardHeader
                    title="Customer Analytics"
                    subtitle="Segment-wise customer insights, lifetime value and AI-driven recommendations."
                    badgeLabel="Total Customers"
                    badgeValue={
                        data?.summary.totalCustomers.toLocaleString() ?? "--"
                    }
                    generatedAt={data?.generatedAt}
                    loading={loading}
                    onRefresh={refresh}
                />

                <Stack
                    direction={{ xs: "column", sm: "row" }}
                    justifyContent="flex-end"
                    sx={{ mb: { xs: 2, md: 3 } }}
                >

                    <Button
                        variant="outlined"
                        startIcon={<DownloadRoundedIcon />}
                        onClick={handleExportCSV}
                        disabled={!hasCustomers}
                        sx={{
                            borderColor: "rgba(74,14,23,.3)",
                            color: "#4A0E17",
                            fontWeight: 700,
                            textTransform: "none",
                            borderRadius: 3,
                            width: { xs: "100%", sm: "auto" },
                            "&:hover": {
                                borderColor: "#4A0E17",
                                bgcolor: "rgba(74,14,23,.04)"
                            },
                            "&:disabled": {
                                borderColor: "rgba(74,14,23,.15)",
                                color: "rgba(74,14,23,.35)"
                            }
                        }}
                    >

                        Export CSV

                    </Button>

                </Stack>

                {/* Data already loaded once, lekin ek refresh/filter change
                    fail ho gaya — inline warning, poori screen replace nahi karte */}
                {error && data && (

                    <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>

                        {error}

                    </Alert>

                )}

                <CustomerFilters
                    days={params.days ?? 30}
                    search={params.search ?? ""}
                    sort={params.sort ?? "spent"}
                    segment={params.segment}
                    customerType={params.customerType}
                    atRisk={!!params.atRisk}
                    loading={loading}
                    onDaysChange={setDays}
                    onSearchChange={search}
                    onSortChange={(value: string) =>
                        setSort(value as CustomerAnalyticsParams["sort"])
                    }
                    onSegmentChange={(value?: string) =>
                        setSegment(
                            value as CustomerAnalyticsParams["segment"]
                        )
                    }
                    onCustomerTypeChange={(value?: string) =>
                        setCustomerType(
                            value as CustomerAnalyticsParams["customerType"]
                        )
                    }
                    onAtRiskChange={setAtRisk}
                    onRefresh={refresh}
                />

                {!data ? null : (

                    <>

                        <CustomerHero
                            totalCustomers={data.summary.totalCustomers}
                            totalRevenue={data.summary.totalRevenue}
                            repeatRate={data.summary.repeatRate}
                            retentionRate={data.summary.retentionRate}
                        />

                        <CustomerSummaryCards
                            vipCustomers={data.summary.vipCustomers}
                            premiumCustomers={data.summary.premiumCustomers}
                            regularCustomers={data.summary.regularCustomers}
                            newCustomers={data.summary.newCustomers}
                            repeatCustomers={data.summary.repeatCustomers}
                            activeCustomers={data.summary.activeCustomers}
                            inactiveCustomers={data.summary.inactiveCustomers}
                            averageLifetimeValue={
                                data.summary.averageLifetimeValue
                            }
                        />

                        <Grid container spacing={3} sx={{ mb: 4 }}>

                            <Grid size={{ xs: 12, lg: 7 }}>

                                <CustomerTrendChart
                                    data={data.customerTrend}
                                />

                            </Grid>

                            <Grid size={{ xs: 12, lg: 5 }}>

                                <SegmentDistribution
                                    segments={data.segments}
                                />

                            </Grid>

                        </Grid>

                        <TopCustomersCard customers={data.data.slice(0, 5)} />

                        <CustomerRecommendations customers={data.data} />

                        {hasCustomers ? (

                            <CustomerTable
                                customers={data.data}
                                loading={loading}
                                page={data.pagination.page}
                                pageSize={data.pagination.limit}
                                total={data.pagination.total}
                                onPageChange={setPage}
                            />

                        ) : (

                            <Box sx={{ mt: 4 }}>

                                <EmptyState
                                    title="No Customers Found"
                                    message="Try adjusting your filters or search term."
                                    buttonText="Reset Filters"
                                    onRefresh={handleResetFilters}
                                    height="40vh"
                                />

                            </Box>

                        )}

                    </>

                )}

            </Box>

        </AdminLayout>

    );

}
