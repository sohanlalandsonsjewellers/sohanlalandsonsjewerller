import aiAxios from "../aiAxios";
import { BusinessSummaryResponse } from "../../types/ai/businessSummary";

export async function getBusinessSummary(
    days: number = 30
): Promise<BusinessSummaryResponse> {

    const { data } = await aiAxios.get<BusinessSummaryResponse>(
        "/ai/business-summary",
        {
            params: {
                days,
            },
        }
    );

    return data;
}