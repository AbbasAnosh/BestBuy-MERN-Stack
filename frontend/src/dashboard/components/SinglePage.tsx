import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props = {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart?: {
    dataKeys: { name: string; color: string }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
};

const Single = (props: Props) => {
  return (
    <div className="flex ">
      <div className="flex-1">
        <div className="flex flex-col ml-[15px] gap-[20px]">
          <div className="flex items-center gap-[20px]">
            {props.img && (
              <img
                src={props.img}
                alt=""
                className="w-[100px] h-[100px] rounded-[20px] object-cover"
              />
            )}
            <h1 className="font-[500]">{props.title}</h1>
            <button>Update</button>
          </div>
          <div className="text-[18px]">
            {Object.entries(props.info).map((item) => (
              <div className="mt-[30px] mb-[30px]" key={item[0]}>
                <span className="font-[600] mr-[10px] capitalize">
                  {item[0]}
                </span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90p%] h-0 border-[0.5px] border-soft-bg mt-[20px] mb-[20px]" />
        {props.chart && (
          <div className="mt-[50px] w-[80%] h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                  />
                ))}
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="mb-[20px]">Latest Activities</h2>
        {props.activities && (
          <ul className="list-none relative w-1 pt-[50px] bg-[#f45b69]">
            {props.activities.map((activity) => (
              <li
                key={activity.text}
                className="list-none relative w-1 pt-[50px] bg-[#f45b69]"
              >
                <span className="absolute left-[50%] bottom-0 w-[10px] h-[10px] rounded-[50%] bg-[#f45b69] transform -translate-x-1/2"></span>
                <div className="min-w-[480px] p-[15px] bg-[#f45b6810]">
                  <p className="mb-[5px]">{activity.text}</p>
                  <time className="text-[12px]">{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
