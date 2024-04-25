import { useState } from "react";
import DataTable from "../components/DataTable";
import Add from "../components/Add";
import { products } from "../data";
import { GridColDef } from "@mui/x-data-grid";

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
    field: "title",
    type: "string",
    headerName: "Title",
    flex: 2,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    flex: 1,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    flex: 1.5,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    flex: 1.5,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1.5,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    flex: 1,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
      <div className="flex items-center gap-[20px] mb-[20px]">
        <h1>Products</h1>
        <button
          onClick={() => setOpen(true)}
          className="p-[5px] cursor-pointer bg-main-color text-main-bg rounded-md"
        >
          Add New Products
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />

      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Products;
