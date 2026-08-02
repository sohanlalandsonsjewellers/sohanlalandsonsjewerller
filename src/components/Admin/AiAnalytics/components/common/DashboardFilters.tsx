import {
    Box,
    Button,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Switch,
    Typography
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

interface DashboardFiltersProps {

    loading?: boolean;

    /* Visibility */

    showSearch?: boolean;

    showDays?: boolean;

    showSort?: boolean;

    showSegment?: boolean;

    showCustomerType?: boolean;

    showAtRisk?: boolean;

    /* Values */

    search?: string;

    days?: number;

    sort?: string;

    segment?: string;

    customerType?: string;

    atRisk?: boolean;

    /* Events */

    onSearchChange?: (value: string) => void;

    onDaysChange?: (value: number) => void;

    onSortChange?: (value: string) => void;

    onSegmentChange?: (value?: string) => void;

    onCustomerTypeChange?: (value?: string) => void;

    onAtRiskChange?: (checked: boolean) => void;

    onRefresh?: () => void;

}

export default function DashboardFilters({
    loading,
    showSearch,
    showDays,
    showSort,
    showSegment,
    showCustomerType,
    showAtRisk,
    search,
    days,
    sort,
    segment,
    customerType,
    atRisk,
    onSearchChange,
    onDaysChange,
    onSortChange,
    onSegmentChange,
    onCustomerTypeChange,
    onAtRiskChange,
    onRefresh
}: DashboardFiltersProps) {

    return (

        <Box

            sx={{

                p: 2,

                borderRadius: 4,

                bgcolor: "rgba(255,255,255,.6)",

                mb: 3

            }}

        >

            <Grid container spacing={2} alignItems="center">

                {showSearch && (

                    <Grid

                        size={{

                            xs: 12,

                            md: 12,

                            lg: 4

                        }}

                    >

                        <OutlinedInput

                            fullWidth

                            value={search}

                            placeholder="Search customers..."

                            onChange={(e) =>

                                onSearchChange?.(

                                    e.target.value

                                )

                            }

                            startAdornment={

                                <InputAdornment position="start">

                                    <SearchRoundedIcon />

                                </InputAdornment>

                            }

                            sx={{

                                height: 52,

                                borderRadius: 3,

                                bgcolor: "#FFF"

                            }}

                        />

                    </Grid>

                )}

                {showDays && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <FormControl

                            fullWidth

                        >

                            <InputLabel>

                                Days

                            </InputLabel>

                            <Select

                                value={days}

                                label="Days"

                                onChange={(e) =>

                                    onDaysChange?.(

                                        Number(

                                            e.target.value

                                        )

                                    )

                                }

                                sx={{

                                    height: 52,

                                    borderRadius: 3

                                }}

                            >

                                <MenuItem value={7}>

                                    Last 7 Days

                                </MenuItem>

                                <MenuItem value={30}>

                                    Last 30 Days

                                </MenuItem>

                                <MenuItem value={90}>

                                    Last 90 Days

                                </MenuItem>

                                <MenuItem value={365}>

                                    Last 365 Days

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                )}

                {showSort && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <FormControl

                            fullWidth

                        >

                            <InputLabel>

                                Sort

                            </InputLabel>

                            <Select

                                value={sort}

                                label="Sort"

                                onChange={(e) =>

                                    onSortChange?.(

                                        String(

                                            e.target.value

                                        )

                                    )

                                }

                                sx={{

                                    height: 52,

                                    borderRadius: 3

                                }}

                            >

                                <MenuItem value="spent">

                                    Highest Spending

                                </MenuItem>

                                <MenuItem value="orders">

                                    Orders

                                </MenuItem>

                                <MenuItem value="recent">

                                    Recent

                                </MenuItem>

                                <MenuItem value="name">

                                    Name

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                )}

                {showSegment && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <FormControl

                            fullWidth

                        >

                            <InputLabel>

                                Segment

                            </InputLabel>

                            <Select

                                value={segment ?? ""}

                                label="Segment"

                                onChange={(e) =>

                                    onSegmentChange?.(

                                        String(

                                            e.target.value

                                        ) || undefined

                                    )

                                }

                                sx={{

                                    height: 52,

                                    borderRadius: 3

                                }}

                            >

                                <MenuItem value="">

                                    All

                                </MenuItem>

                                <MenuItem value="vip">

                                    VIP

                                </MenuItem>

                                <MenuItem value="regular">

                                    Regular

                                </MenuItem>

                                <MenuItem value="dormant">

                                    Dormant

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                )}

                {showCustomerType && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <FormControl

                            fullWidth

                        >

                            <InputLabel>

                                Customer Type

                            </InputLabel>

                            <Select

                                value={customerType ?? ""}

                                label="Customer Type"

                                onChange={(e) =>

                                    onCustomerTypeChange?.(

                                        String(

                                            e.target.value

                                        ) || undefined

                                    )

                                }

                                sx={{

                                    height: 52,

                                    borderRadius: 3

                                }}

                            >

                                <MenuItem value="">

                                    All

                                </MenuItem>

                                <MenuItem value="repeat">

                                    Repeat

                                </MenuItem>

                                <MenuItem value="new">

                                    New

                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                )}

                {showAtRisk && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <Box

                            sx={{

                                height: 52,

                                px: 2,

                                borderRadius: 3,

                                border:

                                    "1px solid rgba(184,155,115,.18)",

                                bgcolor: "#FFF",

                                display: "flex",

                                alignItems: "center",

                                justifyContent: "space-between"

                            }}

                        >

                            <Typography

                                fontWeight={600}

                                color="#4A0E17"

                            >

                                At Risk

                            </Typography>

                            <Switch

                                checked={!!atRisk}

                                onChange={(e) =>

                                    onAtRiskChange?.(

                                        e.target.checked

                                    )

                                }

                            />

                        </Box>

                    </Grid>

                )}

                {onRefresh && (

                    <Grid

                        size={{

                            xs: 12,

                            sm: 6,

                            lg: 2

                        }}

                    >

                        <Button

                            fullWidth

                            variant="contained"

                            disabled={loading}

                            onClick={onRefresh}

                            startIcon={

                                <RefreshRoundedIcon />

                            }

                            sx={{

                                height: 52,

                                borderRadius: 3,

                                bgcolor: "#4A0E17",

                                color: "#FFF",

                                fontWeight: 700,

                                textTransform: "none",

                                boxShadow:

                                    "0 10px 24px rgba(74,14,23,.18)",

                                transition: ".25s",

                                "&:hover": {

                                    bgcolor: "#611523",

                                    transform:

                                        "translateY(-2px)",

                                    boxShadow:

                                        "0 16px 30px rgba(74,14,23,.24)"

                                },

                                "&:disabled": {

                                    bgcolor:

                                        "rgba(74,14,23,.35)",

                                    color: "#FFF"

                                }

                            }}

                        >

                            Refresh

                        </Button>

                    </Grid>

                )}

            </Grid>

        </Box>

    );

}
