import {

    DataGrid,

    GridColDef

} from "@mui/x-data-grid";

import {

    Chip

} from "@mui/material";

import SectionCard from "../common/SectionCard";

import {

    DemandInsightItem

} from "../../../../../types/ai/demandForecast";

interface Props{

    insights:DemandInsightItem[];

    loading:boolean;

}

export default function DemandForecastTable({

    insights,

    loading

}:Props){

    const columns:GridColDef[]=[

        {

            field:"name",

            headerName:"Product",

            flex:1.5,

            minWidth:220

        },

        {

            field:"currentStock",

            headerName:"Stock",

            width:100

        },

        {

            field:"predictedDemand",

            headerName:"Demand",

            width:120

        },

        {

            field:"daysOfStockLeft",

            headerName:"Days Left",

            width:120

        },

        {

            field:"stockCoveragePercent",

            headerName:"Coverage",

            width:120,

            renderCell:(p)=>

                `${Number(p.value).toFixed(1)}%`

        },

        {

            field:"demandScore",

            headerName:"Score",

            width:110

        },

        {

            field:"priority",

            headerName:"Priority",

            width:120,

            renderCell:(p)=>

                <Chip

                    size="small"

                    label={p.value}

                    color={

                        p.value==="Critical"

                        ?"error"

                        :p.value==="High"

                        ?"warning"

                        :p.value==="Medium"

                        ?"primary"

                        :"success"

                    }

                />

        },

        {

            field:"businessRecommendation",

            headerName:"Recommendation",

            flex:2,

            minWidth:300

        }

    ];

    return(

        <SectionCard

            title="Demand Forecast Table"

            subtitle="AI demand analysis"

        >

            <DataGrid

                autoHeight

                rows={insights}

                columns={columns}

                loading={loading}

                getRowId={(r)=>r.productId}

                pageSizeOptions={[10,20,50]}

                disableRowSelectionOnClick

            />

        </SectionCard>

    );

}