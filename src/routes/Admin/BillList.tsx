import { useEffect, useState } from "react";
import {
  Button,
  Box,
  TextField,
  Pagination
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import AdminLayout from "../../components/Admin/AdminLayout";
import BillTable from "../../components/Admin/BillTable";
import BillDeleteDialog from "../Admin/BillDeleteDialog";

import {
  getAllBills,
  exportBillExcel
} from "../../api/adminBill";

export default function BillList() {

  const navigate = useNavigate();

  const [bills, setBills] = useState([]);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const [month, setMonth] = useState("");
  const [year, setYear] = useState(
    new Date().getFullYear().toString()
  );

  const [page, setPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {
    loadBills();
  }, []);

  async function loadBills() {
    const res = await getAllBills();
    setBills(res.bills || []);
  }

  const handleExport = async () => {
    try {

      const res =
        await exportBillExcel(
          month,
          year
        );

      const link =
        document.createElement("a");

      link.href =
        "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," +
        res.excelBase64;

      const monthName =
        month
          ? new Date(
            2000,
            Number(month) - 1,
            1
          ).toLocaleString(
            "en-US",
            {
              month: "long"
            }
          )
          : "";

      if (month && year) {

        link.download =
          `${monthName}-${year}-Bills.xlsx`;

      } else if (year) {

        link.download =
          `Bills-${year}.xlsx`;

      } else {

        link.download =
          "Bills-All.xlsx";

      }

      link.click();

    } catch (err) {

      console.error(
        "Error Exporting:",
        err
      );

    }
  };

  const filtered = bills.filter((b: any) => {

    const t =
      search.toLowerCase();

    const billDate =
      new Date(b.created_at);

    const matchesSearch =
      b.customerName?.toLowerCase().includes(t) ||
      b.invoiceNo?.toLowerCase().includes(t) ||
      b.billNo?.toLowerCase().includes(t) ||
      b.customerPhone?.toLowerCase().includes(t);

    const matchesMonth =
      !month ||
      billDate.getMonth() + 1 === Number(month);

    const matchesYear =
      !year ||
      billDate.getFullYear() === Number(year);

    return (
      matchesSearch &&
      matchesMonth &&
      matchesYear
    );
  });

  const startIndex =
    (page - 1) * rowsPerPage;

  const paginatedBills =
    filtered.slice(
      startIndex,
      startIndex + rowsPerPage
    );

  return (
    <AdminLayout title="Bills List">

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row"
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "stretch",
            sm: "center"
          },
          mb: 3,
          gap: 2,
          flexWrap: "wrap"
        }}
      >

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center"
          }}
        >

          {/* SEARCH */}
          <TextField
            label="Search bills..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            size="small"
            sx={{
              width: "300px",
              bgcolor: "#FFFFFF",
              borderRadius: 0,

              "& .MuiInputBase-input": {
                color: "#4A0E17 !important",
                fontWeight: 600,
                fontSize: "0.85rem",
              },

              "& .MuiInputLabel-root": {
                color: "#757575 !important",
                fontSize: "0.85rem",
              },

              "& .MuiInputLabel-root.Mui-focused": {
                color: "#4A0E17 !important",
              },

              "& .MuiOutlinedInput-root": {
                borderRadius: 0,

                "& fieldset": {
                  borderColor: "#A0A0A0 !important",
                  borderWidth: "1px !important",
                },

                "&:hover fieldset": {
                  borderColor: "#4A0E17 !important",
                },

                "&.Mui-focused fieldset": {
                  borderColor: "#4A0E17 !important",
                  borderWidth: "1.5px !important",
                },
              },
            }}
          />

          {/* MONTH */}
          <TextField
            select
            size="small"
            value={month}
            onChange={(e) => {
              setMonth(e.target.value);
              setPage(1);
            }}
            SelectProps={{
              native: true
            }}
            sx={{
              minWidth: 160,
              bgcolor: "#fff"
            }}
          >
            <option value="">
              All Months
            </option>

            {Array.from(
              { length: 12 },
              (_, i) =>
                new Date(
                  2000,
                  i,
                  1
                ).toLocaleString(
                  "en-US",
                  {
                    month: "long"
                  }
                )
            ).map(
              (
                monthName,
                index
              ) => (
                <option
                  key={index + 1}
                  value={index + 1}
                >
                  {monthName}
                </option>
              )
            )}
          </TextField>

          {/* YEAR */}
          <TextField
            select
            size="small"
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setPage(1);
            }}
            SelectProps={{
              native: true
            }}
            sx={{
              minWidth: 120,
              bgcolor: "#fff"
            }}
          >
            <option value="">
              All Years
            </option>

            {Array.from(
              { length: 15 },
              (_, i) =>
                new Date().getFullYear() - 5 + i
            ).map((yr) => (
              <option
                key={yr}
                value={yr}
              >
                {yr}
              </option>
            ))}
          </TextField>

        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1
          }}
        >
          <Button
            variant="outlined"
            onClick={handleExport}
          >
            Export Excel
          </Button>

          <Button
            variant="contained"
            onClick={() =>
              navigate("/admin/bills/create")
            }
          >
            + Create Bill
          </Button>
        </Box>

      </Box>

      <BillTable
        bills={paginatedBills}
        onEdit={(id: string) =>
          navigate(
            `/admin/bills/edit/${id}`
          )
        }
        onView={(id: string) =>
          navigate(
            `/admin/bills/view/${id}`
          )
        }
        onDelete={(id: string) =>
          setDeleteId(id)
        }
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3
        }}
      >
        <Pagination
          page={page}
          count={Math.max(
            1,
            Math.ceil(
              filtered.length /
              rowsPerPage
            )
          )}
          onChange={(_, value) =>
            setPage(value)
          }
          color="primary"
        />
      </Box>

      <BillDeleteDialog
        open={Boolean(deleteId)}
        billId={deleteId}
        onClose={() =>
          setDeleteId(null)
        }
        onDeleted={loadBills}
      />

    </AdminLayout>
  );
}