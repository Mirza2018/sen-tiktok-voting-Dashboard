import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Line,
} from "recharts";

const data = [
  {
    name: "Jan",
    user: 500,
    driver: 300,
  },
  {
    name: "Feb",
    user: 1100,
    driver: 900,
  },
  {
    name: "Mar",
    user: 700,
    driver: 500,
  },
  {
    name: "Apr",
    user: 1000,
    driver: 800,
  },
  {
    name: "May",
    user: 1400,
    driver: 1200,
  },
  {
    name: "Jun",
    user: 1200,
    driver: 1000,
  },
  {
    name: "Jul",
    user: 800,
    driver: 600,
  },
  {
    name: "Aug",
    user: 600,
    driver: 400,
  },
  {
    name: "Sep",
    user: 1300,
    driver: 1100,
  },
  {
    name: "Oct",
    user: 1000,
    driver: 800,
  },
  {
    name: "Nov",
    user: 800,
    driver: 600,
  },
  {
    name: "Dec",
    user: 1400,
    driver: 1200,
  },
];
const UserRatioLineChart = () => {
  return (
    <div className="w-full h-96 p-5 ">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" stroke="#00000040" /> */}
          <CartesianGrid
            vertical={false}
            stroke="#a7a9aa40"
            strokeDasharray="5 5"
          />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 1500]} />
          <Tooltip />
          {/* 
          <Line
            type="monotone"
            dataKey="user"
            stroke="#B4B8BD" // Blue for user
            strokeWidth={4}
            dot={{
              r: 0,
            }} // Blue dots with white fill
            activeDot={{ r: 10 }} // Active dot style
          /> */}
          <Line
            type="monotone"
            dataKey="user"
            stroke="#25F4EE" // Teal for service users
            strokeWidth={4}
            dot={{ r: 0 }} // Teal dots with white fill
            activeDot={{ r: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserRatioLineChart;
