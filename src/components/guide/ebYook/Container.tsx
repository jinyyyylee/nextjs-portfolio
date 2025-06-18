"use client";

import { useAppSelector } from "@/lib/hook";
import React from "react";
import PieChart from "./ChartJS/PieChart";
import BarChart from "./ChartJS/BarChart";
import DoughnutChart from "./ChartJS/DoughnutChart";
import DND from "./DndKit/DND";
import GridDnd from "./DndKit/GridDnd";

const Container = () => {

  return (
    <section
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <PieChart />
        <BarChart />
        <DoughnutChart />
      </div>

      <div>
        <DND />
        <GridDnd />
      </div>
    </section>
  );
};

export default Container;
