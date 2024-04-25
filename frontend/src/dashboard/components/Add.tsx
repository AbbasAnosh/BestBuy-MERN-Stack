import { GridColDef } from "@mui/x-data-grid";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setOpen(false);
  };
  return (
    <div className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-modal-bg flex items-center justify-center">
      <div className="p-[50px] rounded-[10px] bg-main-bg relative">
        <span
          className="absolute top-[10px] right-[10px] cursor-pointer"
          onClick={() => props.setOpen(false)}
        >
          X
        </span>
        <h1 className="mb-[40px] text-[24px] text-soft-color">
          Add new {props.slug}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-wrap max-w-[500px] justify-between"
        >
          {props.columns
            .filter((item) => item.field !== "id" && item.field !== "img")
            .map((column) => (
              <div className="w-[40%] flex flex-col gap-[10px] mb-[20px]">
                <label className="text-[14px]">{column.headerName}</label>
                <input
                  type={column.type}
                  placeholder={column.field}
                  className="p-[10px] bg-bg text-main-color outline-none border-[1px] border-soft-color rounded-[3px]"
                />
              </div>
            ))}
          <button className="w-[100%] p-[10px] cursor-pointer bg-main-color text-main-bg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add;
