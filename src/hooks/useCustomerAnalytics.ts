import { useCallback, useEffect, useState } from "react";

import {
    CustomerAnalyticsResponse
} from "../types/ai/customer";

import {
    getCustomerAnalytics,
    CustomerAnalyticsParams
} from "../api/ai/customerAnalytics";

/* ===========================================================
   CUSTOMER ANALYTICS HOOK
=========================================================== */

export default function useCustomerAnalytics(

    initialParams: CustomerAnalyticsParams = {}

) {

    const [data, setData] =
        useState<CustomerAnalyticsResponse | null>(null);

    const [loading, setLoading] =
        useState<boolean>(true);

    const [error, setError] =
        useState<string | null>(null);

    const [params, setParams] =
        useState<CustomerAnalyticsParams>({

            days: 30,

            page: 1,

            limit: 10,

            sort: "spent",

            search: "",

            segment: undefined,

            customerType: undefined,

            atRisk: false,

            ...initialParams

        });

    /* =======================================================
       LOAD DATA
    ======================================================= */

    const loadData = useCallback(

        async (

            override?: CustomerAnalyticsParams

        ) => {

            try {

                setLoading(true);

                setError(null);

                const merged = {

                    ...params,

                    ...override

                };

                const response =
                    await getCustomerAnalytics(merged);

                setData(response);

            }

            catch (err: any) {

                setError(

                    err?.response?.data?.message ||

                    err?.message ||

                    "Unable to load customer analytics."

                );

            }

            finally {

                setLoading(false);

            }

        },

        [params]

    );

    /* =======================================================
       INITIAL LOAD
    ======================================================= */

    useEffect(() => {

        loadData();

    }, [loadData]);

    /* =======================================================
       UPDATE PARAMS
    ======================================================= */

    function updateParams(

        updates: Partial<CustomerAnalyticsParams>

    ) {

        const next = {

            ...params,

            ...updates

        };

        setParams(next);

        loadData(next);

    }

    /* =======================================================
       REFRESH
    ======================================================= */

    function refresh() {

        loadData(params);

    }

    /* =======================================================
       SEARCH
    ======================================================= */

    function search(

        value: string

    ) {

        updateParams({

            search: value,

            page: 1

        });

    }

    /* =======================================================
       DAYS
    ======================================================= */

    function setDays(

        days: number

    ) {

        updateParams({

            days,

            page: 1

        });

    }

    /* =======================================================
       SORT
    ======================================================= */

    function setSort(

        sort: CustomerAnalyticsParams["sort"]

    ) {

        updateParams({

            sort

        });

    }

    /* =======================================================
       PAGE
    ======================================================= */

    function setPage(

        page: number

    ) {

        updateParams({

            page

        });

    }

    /* =======================================================
       LIMIT
    ======================================================= */

    function setLimit(

        limit: number

    ) {

        updateParams({

            limit,

            page: 1

        });

    }

    /* =======================================================
       SEGMENT
    ======================================================= */

    function setSegment(

        segment?: CustomerAnalyticsParams["segment"]

    ) {

        updateParams({

            segment,

            page: 1

        });

    }

    /* =======================================================
       CUSTOMER TYPE
    ======================================================= */

    function setCustomerType(

        customerType?: CustomerAnalyticsParams["customerType"]

    ) {

        updateParams({

            customerType,

            page: 1

        });

    }

    /* =======================================================
       AT RISK
    ======================================================= */

    function setAtRisk(

        atRisk: boolean

    ) {

        updateParams({

            atRisk,

            page: 1

        });

    }

    return {

        data,

        loading,

        error,

        params,

        refresh,

        updateParams,

        search,

        setDays,

        setSort,

        setPage,

        setLimit,

        setSegment,

        setCustomerType,

        setAtRisk

    };

}