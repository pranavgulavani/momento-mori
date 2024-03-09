import { useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MomentoForm from "./components/momentoForm/MomentoForm";
import Timeline from "./components/timeline/Timeline";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Progress } from "./components/ui/progress";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "./components/ui/card";
import { cn } from "./lib/utils";

function App() {
  const [data, setData] = useState({
    weeksSpent: 0,
    weeksRemaining: 0,
    viewTimeline: false,
    spentLifeInpercent: 0,
    age: 0,
  });

  const handleSetData = (
    weeksSpent: number,
    weeksRemaining: number,
    spentLifeInPecentage: number,
    age: number
  ): void => {
    setData((data) => ({
      ...data,
      weeksSpent: weeksSpent,
      weeksRemaining: weeksRemaining,
      viewTimeline: true,
      spentLifeInpercent: spentLifeInPecentage,
      age: age,
    }));
  };
  const chartData = [
    { name: "Weeks Spent", value: data.weeksSpent },
    { name: "Weeks Remaining", value: data.weeksRemaining },
  ];

  const COLORS = ["#0088FE", "#FFBB28"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <>
      <div className="flex w-full flex-col h-screen">
        <div className="basis-16">
          <Header />
        </div>
        <div className="flex gap-4 justify-center items-center flex-1 md:flex-row flex-col py-3">
          <div>
            <MomentoForm handleSetData={handleSetData} />
          </div>
          {data.age > 0 && (
            <>
              <div>
                <Card
                  className={cn(" w-[350px] md:w-[380px] mx-2 md:mx-auto h-96")}
                >
                  <CardHeader>
                    <CardDescription>Result</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <Progress value={data.spentLifeInpercent} />
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Result</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell> Current Age</TableCell>
                          <TableCell>{data.age}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Total Weeks</TableCell>
                          <TableCell>
                            {data.weeksSpent + data.weeksRemaining}
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Weeks Spent</TableCell>
                          <TableCell>{data.weeksSpent}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>Weeks Remaining</TableCell>
                          <TableCell>{data.weeksRemaining}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card
                  className={cn(" w-[350px] md:w-[380px] mx-2 md:mx-auto h-96")}
                >
                  <CardHeader>
                    <CardDescription>Chart</CardDescription>
                  </CardHeader>
                  <ResponsiveContainer width="100%" height="80%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {chartData.map((entry: any, index: any) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>
              </div>
            </>
          )}
        </div>
        <div className="basis-14 ">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
