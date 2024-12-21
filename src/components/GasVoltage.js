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


export default function GasVoltageChart() {

  const data = [
    {
      Day: "Monday",
      GasVoltage: 5.21
    },
    {
      Day: "Tuesday",
      GasVoltage: 10.45
    },
    {
      Day: "Wednesday",
      GasVoltage: 15.0
    },
    {
      Day: "Thursday",
      GasVoltage: 20.59
    },
    {
      Day: "Friday",
      GasVoltage: 25.99
    },
    {
      Day: "Saturday",
      GasVoltage: 5.10
    },
    {
      Day: "Sunday",
      GasVoltage: 3.2
    },
  ]


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Gas Voltage Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="GasVoltage" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="GasVoltage"
              name="Gas Voltage"
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