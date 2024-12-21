import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";


export default function HumidityChart() {

  const data = [
    {
      Day: "Monday",
      Humidity: 5.21
    },
    {
      Day: "Tuesday",
      Humidity: 10.45
    },
    {
      Day: "Wednesday",
      Humidity: 15.0
    },
    {
      Day: "Thursday",
      Humidity: 20.59
    },
    {
      Day: "Friday",
      Humidity: 25.99
    },
    {
      Day: "Saturday",
      Humidity: 5.10
    },
    {
      Day: "Sunday",
      Humidity: 3.2
    },
  ]


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Humidity Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="Humidity" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Humidity"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            >
              <LabelList position="top" offset={10} />
            </Line>
          </LineChart>
      </ResponsiveContainer>
    </>
  )
}