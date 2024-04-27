import { GridColDef } from "@mui/x-data-grid";
import React from "react";
import DataTable from "../components/DataTable";
import { useGetOrdersQuery } from "../../slices/ordersApiSlice";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    flex: 0.5,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "user",
    type: "string",
    headerName: "USER",
    flex: 2,
  },
  {
    field: "date",
    type: "string",
    headerName: "DATE",
    flex: 1,
  },
  {
    field: "total",
    type: "string",
    headerName: "TOTAL",
    flex: 1.5,
  },
  {
    field: "paid",
    headerName: "PAID",
    type: "string",
    flex: 1.5,
  },
  {
    field: "delivered",
    headerName: "DELIVERED",
    flex: 1.5,
    type: "string",
  },
];

const Orders = () => {
  const { data: orders, isLoading, error } = useGetOrdersQuery({});
  console.log(orders, "orderssdfsfs");
  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
      <div className="flex items-center gap-[20px] mb-[20px]">
        <h1>Products</h1>
        {/* <button
          onClick={() => setOpen(true)}
          className="p-[5px] cursor-pointer bg-main-color text-main-bg rounded-md"
        >
          Add New Products
        </button> */}
      </div>
      <DataTable slug="products" columns={columns} rows={orders} />
    </div>
  );
};

export default Orders;
