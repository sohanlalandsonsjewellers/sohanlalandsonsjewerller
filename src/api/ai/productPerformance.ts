import api from "../aiAxios";

import {

    ProductPerformanceResponse

} from "../../types/ai/product";

export interface ProductPerformanceParams {

    category?: string;

    grade?: string;

    moving?: string;

    trend?: string;

}

export async function getProductPerformance(

    params: ProductPerformanceParams = {}

) {

    const { data } = await api.get<ProductPerformanceResponse>(

        "/product-performance",

        {

            params

        }

    );

    return data;

}