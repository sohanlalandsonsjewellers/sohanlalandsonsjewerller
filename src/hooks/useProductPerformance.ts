import {

    useCallback,

    useEffect,

    useState

} from "react";

import {

    getProductPerformance,

    ProductPerformanceParams

} from "../api/ai/productPerformance";

import {

    ProductPerformanceResponse

} from "../types/ai/product";

export default function useProductPerformance() {

    const [

        data,

        setData

    ] = useState<ProductPerformanceResponse>();

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        error,

        setError

    ] = useState("");

    const [

        params,

        setParams

    ] = useState<ProductPerformanceParams>({});

    const refresh = useCallback(

        async (

            next: ProductPerformanceParams = params

        ) => {

            try {

                setLoading(true);

                const response =

                    await getProductPerformance(next);

                setData(response);

                setParams(next);

                setError("");

            } catch (err: any) {

                setError(

                    err?.response?.data?.detail ??

                    err.message

                );

            } finally {

                setLoading(false);

            }

        },

        [params]

    );

    useEffect(() => {

        refresh();

    }, []);

    return {

        data,

        loading,

        error,

        params,

        refresh,

        setCategory: (category?: string) =>

            refresh({

                ...params,

                category

            }),

        setGrade: (grade?: string) =>

            refresh({

                ...params,

                grade

            }),

        setMoving: (moving?: string) =>

            refresh({

                ...params,

                moving

            }),

        setTrend: (trend?: string) =>

            refresh({

                ...params,

                trend

            })

    };

}