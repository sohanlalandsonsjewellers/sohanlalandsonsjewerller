import api from "../aiAxios";

import {

    PriceOptimizationResponse

} from "../../types/ai/price";

export async function getPriceOptimization() {

    const { data } = await api.get<PriceOptimizationResponse>(

        "/price-optimization"

    );

    return data;

}