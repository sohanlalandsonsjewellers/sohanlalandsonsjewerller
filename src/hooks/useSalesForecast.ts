import {

    useCallback,
    useEffect,
    useState

} from "react";

import {

    getSalesForecast,
    getSalesHistory,
    getSalesSummary

} from "../api/ai/salesForecastApi";

import {

    SalesForecastResponse,
    SalesHistoryResponse,
    SalesSummaryResponse

} from "../types/ai/salesForecast";

export default function useSalesForecast(

    days = 30

) {

    const [

        forecast,

        setForecast

    ] = useState<SalesForecastResponse>();

    const [

        history,

        setHistory

    ] = useState<SalesHistoryResponse>();

    const [

        summary,

        setSummary

    ] = useState<SalesSummaryResponse>();

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        error,

        setError

    ] = useState("");

    const refresh = useCallback(

        async () => {

            try {

                setLoading(true);

                const [

                    forecastRes,

                    historyRes,

                    summaryRes

                ] = await Promise.all([

                    getSalesForecast(days),

                    getSalesHistory(days),

                    getSalesSummary(days)

                ]);

                setForecast(

                    forecastRes

                );

                setHistory(

                    historyRes

                );

                setSummary(

                    summaryRes

                );

                setError("");

            }

            catch (err:any) {

                setError(

                    err?.response?.data?.detail ||

                    err.message

                );

            }

            finally {

                setLoading(false);

            }

        },

        [

            days

        ]

    );

    useEffect(() => {

    refresh();

}, [refresh]);

    return {

        forecast,

        history,

        summary,

        loading,

        error,

        refresh

    };

}