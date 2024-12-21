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


export default function LightIntensityChart() {

  const data = [
    {
      Day: "Monday",
      LightIntensity: 5.21
    },
    {
      Day: "Tuesday",
      LightIntensity: 10.45
    },
    {
      Day: "Wednesday",
      LightIntensity: 15.0
    },
    {
      Day: "Thursday",
      LightIntensity: 20.59
    },
    {
      Day: "Friday",
      LightIntensity: 25.99
    },
    {
      Day: "Saturday",
      LightIntensity: 5.10
    },
    {
      Day: "Sunday",
      LightIntensity: 3.2
    },
  ]


  return(
    <>
      <h1 className="flex justify-center pb-4 font-bold">
        Weekly Light Intensity Report 
      </h1>
      <ResponsiveContainer  width={"100%"} height={350}>
          <LineChart data={data} margin={{top: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" padding={{left: 30, right: 30}} />
            <YAxis dataKey="LightIntensity" padding={{left:30, right: 30}}/>
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="LightIntensity"
              name="Light Intensity"
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