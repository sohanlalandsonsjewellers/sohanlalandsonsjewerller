import {

    useCallback,
    useEffect,
    useState

} from "react";

import {

    getReorderPlan

} from "../api/ai/reorderApi";

import {

    ReorderResponse

} from "../types/ai/reorder";

export default function useReorder(

    days: number = 30

) {

    const [

        data,

        setData

    ] = useState<ReorderResponse>();

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

                    await getReorderPlan(days);

                setData(response);

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

        [days]

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