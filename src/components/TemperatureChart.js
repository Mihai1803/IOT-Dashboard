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


export default function TemperatureChart() {

  const data = [
    {
      Day: "Monday",
      Temperature: 5.21
    },
    {
      Day: "Tuesday",
      Temperature: 10.45
    },
    {
      Day: "Wednesday",
      Temperature: 15.0
    },
    {
      Day: "Thursday",
      Temperature: 20.59
    },
    {
      Day: "Friday",
      Temperature: 25.99
    },
    {
      Day: "Saturday",
      Temperature: 5.10
    },
    {
      Day: "Sunday",
      Temperature: 3.2
    },
  ]


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Temperature Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="Temperature" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Temperature"
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