import {

    useCallback,
    useEffect,
    useState

} from "react";

import {

    getPriceOptimization

} from "../api/ai/priceOptimization";

import {

    PriceOptimizationResponse

} from "../types/ai/price";

export default function usePriceOptimization() {

    const [

        data,

        setData

    ] = useState<PriceOptimizationResponse>();

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

                const response =

                    await getPriceOptimization();

                setData(response);

                setError("");

            }

            catch (err: any) {

                setError(

                    err?.response?.data?.detail ??

                    err.message

                );

            }

            finally {

                setLoading(false);

            }

        },

        []

    );

    useEffect(

        () => {

            refresh();

        },

        [refresh]

    );

    return {

        data,

        loading,

        error,

        refresh

    };

}