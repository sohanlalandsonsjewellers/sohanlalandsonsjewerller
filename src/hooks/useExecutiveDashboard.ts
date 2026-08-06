import {

    useState,

    useEffect,

    useCallback

} from "react";

import {

    getExecutiveDashboard

} from "../api/ai/executiveDashboardApi";

import {

    ExecutiveDashboardResponse

} from "../types/ai/executiveDashboard";

export default function useExecutiveDashboard(

    days = 30

) {

    const [

        dashboard,

        setDashboard

    ] = useState<ExecutiveDashboardResponse>();

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

                const response = await getExecutiveDashboard(

                    days

                );

                setDashboard(

                    response

                );

                setError("");

            }

            catch (err: any) {

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

        () => {

            refresh();

        },

        [

            refresh

        ]

    );

    return {

        dashboard,

        loading,

        error,

        refresh

    };

}