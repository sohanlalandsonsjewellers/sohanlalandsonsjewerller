import api from "../aiAxios";

import {

    DemandForecastResponse,

    DemandInsightsResponse

} from "../../types/ai/demandForecast";

export async function getDemandForecast(

    days = 30

) {

    const { data } =

        await api.get<DemandForecastResponse>(

            `/demand-forecast?days=${days}`

        );

    return data;

}

export async function getDemandInsights(

    days = 30

) {

    const { data } =

        await api.get<DemandInsightsResponse>(

            `/demand-insights?days=${days}`

        );

    return data;

}