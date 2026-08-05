import {

    useCallback,
    useEffect,
    useState

} from "react";

import {

    getDemandForecast,
    getDemandInsights

} from "../api/ai/demandForecastApi";

import {

    DemandForecastResponse,
    DemandInsightsResponse

} from "../types/ai/demandForecast";

export default function useDemandForecast(

    days = 30

) {

    const [

        forecast,

        setForecast

    ] = useState<DemandForecastResponse>();

    const [

        insights,

        setInsights

    ] = useState<DemandInsightsResponse>();

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

                    insightRes

                ] = await Promise.all([

                    getDemandForecast(days),

                    getDemandInsights(days)

                ]);

                setForecast(

                    forecastRes

                );

                setInsights(

                    insightRes

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

    useEffect(

        ()=>{

            refresh();

        },

        [

            refresh

        ]

    );

    return {

        forecast,

        insights,

        loading,

        error,

        refresh

    };

}