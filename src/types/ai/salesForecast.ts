export interface ForecastItem {

    day: number;

    date: string;

    predictedRevenue: number;

}

export interface SalesForecastResponse {

    success: boolean;

    days: number;

    historyLength: number;

    forecastModel: string;

    forecast: ForecastItem[];

}

export interface SalesHistoryResponse {

    success: boolean;

    historyLength: number;

    history: number[];

}

export interface SalesSummaryResponse {

    success: boolean;

    forecastModel: string;

    forecastDays: number;

    predictedTotalRevenue: number;

    predictedAverageDailyRevenue: number;

}