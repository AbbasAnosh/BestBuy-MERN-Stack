import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

type Props = {
  columns: GridColDef[];
  rows: object[];
  slug: string;
};

const DataTable = (props: Props) => {
  const handleDelete = (id: number) => {};

  const actionColumn: GridColDef = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex gap-[15px] ">
          <Link to={`/dashboard/${props.slug}/${params.row.id}`}>
            <img
              src="/view.svg"
              alt=""
              className="w-[32px] h-[32px] rounded-[50%] object-cover"
            />
          </Link>
          <div className="delete" onClick={() => handleDelete(params.row.id)}>
            <img
              src="/delete.svg"
              alt=""
              className="w-[20px] h-[20px] cursor-pointer"
            />
          </div>
        </div>
      );
    },
  };

  return (
    <div className="bg-main-color  p-[20px] flex-row-reverse rounded-md">
      <DataGrid
        className="bg-main-color p-[20px] flex-row-reverse"
        rows={props.rows}
        columns={[...props.columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default DataTable;
