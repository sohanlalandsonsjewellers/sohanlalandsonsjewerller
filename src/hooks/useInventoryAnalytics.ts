import { useCallback, useEffect, useState } from "react";

import { getInventoryAnalytics } from "../api/ai/inventoryAnalytics";

import { InventoryAnalyticsResponse } from "../types/ai/inventory";

export default function useInventoryAnalytics() {

    const [

        data,

        setData

    ] = useState<InventoryAnalyticsResponse | null>(null);

    const [

        loading,

        setLoading

    ] = useState(true);

    const [

        error,

        setError

    ] = useState<string | null>(null);

    const fetchInventory = useCallback(async () => {

        try {

            setLoading(true);

            setError(null);

            const response =
                await getInventoryAnalytics();

            setData(response);

        }

        catch (err) {

            console.error(err);

            setError(

                err instanceof Error

                    ? err.message

                    : "Failed to load inventory analytics."

            );

        }

        finally {

            setLoading(false);

        }

    }, []);

    useEffect(() => {

        fetchInventory();

    }, [fetchInventory]);

    return {

        data,

        loading,

        error,

        refresh: fetchInventory

    };

}