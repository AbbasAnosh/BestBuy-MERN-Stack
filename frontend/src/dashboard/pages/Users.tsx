import { GridColDef } from "@mui/x-data-grid";

import { useState } from "react";
import DataTable from "../components/DataTable";
import { userRows } from "../data";
import Add from "../components/Add";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.5 },
  {
    field: "img",
    headerName: "Avatar",
    flex: 0.5,
    renderCell: (params) => {
      return (
        <img
          src={params.row.img || "/noavatar.png"}
          alt=""
          className="w-[32px] h-[32px] rounded-[50%] object-cover"
        />
      );
    },
  },
  {
    field: "firstName",
    type: "string",
    headerName: "First name",
    flex: 1,
  },
  {
    field: "lastName",
    type: "string",
    headerName: "Last name",
    flex: 1,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    flex: 1.5,
  },
  {
    field: "phone",
    type: "string",
    headerName: "Phone",
    flex: 1.5,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    flex: 1.5,
    type: "string",
  },
  {
    field: "verified",
    headerName: "Verified",
    flex: 1,
    type: "boolean",
  },
];

const Users = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-[20px] mb-[20px]">
      <div className="flex items-center gap-[20px] mb-[20px]">
        <h1>Users</h1>
        <button
          onClick={() => setOpen(true)}
          className="p-[5px] cursor-pointer bg-main-color text-main-bg rounded-md"
        >
          Add New User
        </button>
      </div>
      <DataTable slug="users" columns={columns} rows={userRows} />
      {open && <Add slug="user" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Users;
