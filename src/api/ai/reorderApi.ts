import api from "../aiAxios";

import {

    ReorderResponse

} from "../../types/ai/reorder";

export async function getReorderPlan(

    days: number = 30

) {

    const { data } = await api.get<ReorderResponse>(

        `/reorder-plan?days=${days}`

    );

    return data;

}