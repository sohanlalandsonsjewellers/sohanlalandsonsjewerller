import api from "../aiAxios";

import {

    SalesForecastResponse,

    SalesHistoryResponse,

    SalesSummaryResponse

} from "../../types/ai/salesForecast";

export async function getSalesForecast(

    days = 30

) {

    const { data } = await api.get<SalesForecastResponse>(

        `/sales-forecast?days=${days}`

    );

    return data;

}

export async function getSalesHistory(

    days = 30

) {

    const { data } = await api.get<SalesHistoryResponse>(

        `/sales-history?days=${days}`

    );

    return data;

}

export async function getSalesSummary(

    days = 30

) {

    const { data } = await api.get<SalesSummaryResponse>(

        `/sales-summary?days=${days}`

    );

    return data;

}