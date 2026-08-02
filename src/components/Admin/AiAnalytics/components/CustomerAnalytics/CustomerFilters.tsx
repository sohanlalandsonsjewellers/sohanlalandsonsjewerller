import {
    Box,
    Button,
    Card,
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    Stack,
    Switch,
    TextField,
    Typography
} from "@mui/material";

import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import RefreshRoundedIcon from "@mui/icons-material/RefreshRounded";

interface Props {

    days: number;

    search: string;

    sort: string;

    segment?: string;

    customerType?: string;

    atRisk: boolean;

    loading?: boolean;

    onDaysChange: (days: number) => void;

    onSearchChange: (value: string) => void;

    onSortChange: (value: string) => void;

    onSegmentChange: (value?: string) => void;

    onCustomerTypeChange: (value?: string) => void;

    onAtRiskChange: (checked: boolean) => void;

    onRefresh: () => void;

}

export default function CustomerFilters({

    days,

    search,

    sort,

    segment,

    customerType,

    atRisk,

    loading,

    onDaysChange,

    onSearchChange,

    onSortChange,

    onSegmentChange,

    onCustomerTypeChange,

    onAtRiskChange,

    onRefresh

}: Props) {

    return (

        <Card
            elevation={0}
            sx={{
                p: 3,
                mb: 4,
                borderRadius: "20px",
                bgcolor: "#FFF",
                border: "1px solid rgba(184,155,115,.20)",
                boxShadow: "0 10px 35px rgba(0,0,0,.05)"
            }}
        >

            <Stack
                spacing={3}
            >

                <Typography
                    variant="h6"
                    sx={{
                        color: "#4A0E17",
                        fontWeight: 700
                    }}
                >

                    Customer Filters

                </Typography>

                <Stack
                    direction={{
                        xs: "column",
                        lg: "row"
                    }}
                    spacing={2}
                >

                    {/* Search */}

                    <OutlinedInput
                        fullWidth
                        value={search}
                        placeholder="Search customer..."
                        onChange={(e) =>
                            onSearchChange(
                                e.target.value
                            )
                        }
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchRoundedIcon />
                            </InputAdornment>
                        }
                    />

                    {/* Days */}

                    <FormControl sx={{ minWidth: 150 }}>

                        <InputLabel>

                            Days

                        </InputLabel>

                        <Select
                            value={days}
                            label="Days"
                            onChange={(e) =>
                                onDaysChange(
                                    Number(
                                        e.target.value
                                    )
                                )
                            }
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

                    {/* Sort */}

                    <FormControl sx={{ minWidth: 170 }}>

                        <InputLabel>

                            Sort

                        </InputLabel>

                        <Select
                            value={sort}
                            label="Sort"
                            onChange={(e) =>
                                onSortChange(
                                    e.target.value
                                )
                            }
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

                </Stack>

                <Stack
                    direction={{
                        xs: "column",
                        lg: "row"
                    }}
                    spacing={2}
                    alignItems="center"
                >

                    {/* Segment */}

                    <TextField
                        select
                        fullWidth
                        label="Segment"
                        value={segment ?? ""}
                        onChange={(e) =>
                            onSegmentChange(
                                e.target.value || undefined
                            )
                        }
                    >

                        <MenuItem value="">
                            All
                        </MenuItem>

                        <MenuItem value="VIP">
                            VIP
                        </MenuItem>

                        <MenuItem value="Premium">
                            Premium
                        </MenuItem>

                        <MenuItem value="Regular">
                            Regular
                        </MenuItem>

                        <MenuItem value="New Customer">
                            New Customer
                        </MenuItem>

                    </TextField>

                    {/* Customer Type */}

                    <TextField
                        select
                        fullWidth
                        label="Customer Type"
                        value={customerType ?? ""}
                        onChange={(e) =>
                            onCustomerTypeChange(
                                e.target.value || undefined
                            )
                        }
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

                    </TextField>

                    {/* At Risk */}

                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            border: "1px solid rgba(184,155,115,.25)",
                            bgcolor: "#FFFDF9"
                        }}
                    >

                        <Typography
                            sx={{
                                fontSize: ".9rem",
                                color: "#555"
                            }}
                        >

                            At Risk

                        </Typography>

                        <Switch
                            checked={atRisk}
                            onChange={(e) =>
                                onAtRiskChange(
                                    e.target.checked
                                )
                            }
                        />

                    </Box>

                    {/* Refresh */}

                    <Button
                        variant="contained"
                        startIcon={
                            <RefreshRoundedIcon />
                        }
                        disabled={loading}
                        onClick={onRefresh}
                        sx={{
                            minWidth: 180,
                            bgcolor: "#4A0E17",
                            borderRadius: 3,
                            py: 1.4,
                            fontWeight: 700,

                            "&:hover": {

                                bgcolor: "#631521"

                            }
                        }}
                    >

                        Refresh

                    </Button>

                </Stack>

            </Stack>

        </Card>

    );

}