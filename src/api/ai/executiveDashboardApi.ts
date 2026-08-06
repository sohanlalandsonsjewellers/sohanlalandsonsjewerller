import aiAxios from "../aiAxios";

import {

    ExecutiveDashboardResponse

} from "../../types/ai/executiveDashboard";

export async function getExecutiveDashboard(

    days = 30

): Promise<ExecutiveDashboardResponse> {

    const {

        data

    } = await aiAxios.get(

        "/executive-dashboard",

        {

            params: {

                days

            }

        }

    );

    return data;

}