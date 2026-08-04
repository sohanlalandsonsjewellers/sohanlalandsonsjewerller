import {

    DataGrid,

    GridColDef

} from "@mui/x-data-grid";

import SectionCard from "../common/SectionCard";

import {

    ForecastItem

} from "../../../../../types/ai/salesForecast";

interface Props{

    forecast:ForecastItem[];

    loading:boolean;

}

export default function ForecastTable({

    forecast,

    loading

}:Props){

    const columns:GridColDef[]=[

        {

            field:"day",

            headerName:"Day",

            width:100

        },

        {

            field:"date",

            headerName:"Date",

            width:160

        },

        {

            field:"predictedRevenue",

            headerName:"Predicted Revenue",

            flex:1,

            minWidth:220,

            renderCell:(params)=>

                `₹${Number(params.value).toLocaleString()}`

        }

    ];

    return(

        <SectionCard

            title="Forecast Data"

            subtitle="Daily AI revenue prediction"

        >

            <DataGrid

                autoHeight

                rows={forecast}

                columns={columns}

                loading={loading}

                getRowId={(row)=>row.day}

                pageSizeOptions={[

                    10,

                    20,

                    50,

                    100

                ]}

                initialState={{

                    pagination:{

                        paginationModel:{

                            page:0,

                            pageSize:10

                        }

                    }

                }}

                disableRowSelectionOnClick

                sx={{

                    border:0,

                    "& .MuiDataGrid-columnHeaders":{

                        bgcolor:"#F9F6F1"

                    }

                }}

            />

        </SectionCard>

    );

}