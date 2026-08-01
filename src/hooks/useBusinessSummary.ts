import { useCallback, useEffect, useState } from "react";

import { getBusinessSummary } from "../api/ai/businessSummary";

import { BusinessSummaryResponse } from "../types/ai/businessSummary";

/* ===========================================================
   USE BUSINESS SUMMARY
=========================================================== */

export default function useBusinessSummary() {

    const [data, setData] = useState<BusinessSummaryResponse | null>(null);

    const [loading, setLoading] = useState<boolean>(true);

    const [error, setError] = useState<string | null>(null);

    const fetchBusinessSummary = useCallback(

        async (days: number = 30) => {

            try {

                setLoading(true);

                setError(null);

                const response =
                    await getBusinessSummary(days);

                setData(response);

            }

            catch (err: any) {

                setError(

                    err?.response?.data?.message ||

                    err?.message ||

                    "Unable to load AI Business Dashboard."

                );

            }

            finally {

                setLoading(false);

            }

        },

        []

    );

    useEffect(() => {

        fetchBusinessSummary(30);

    }, [fetchBusinessSummary]);

    return {

        data,

        loading,

        error,

        refresh: fetchBusinessSummary,

    };

}