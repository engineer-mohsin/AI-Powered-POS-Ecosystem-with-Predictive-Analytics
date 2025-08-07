import React from "react";
import StatCard from "../../../../components/Dashboard/StatCard"; // Adjust path as needed
import { DollarSign, Users, ShoppingCart, BarChart } from "lucide-react";

const ManagerDashboard = () => {
  return (
    <section className="fixed right-0 top-16 p-4 w-[calc(100%-250px)]"> {/* adjust width if sidebar is 250px */}
      <div className="top-section mb-4">
        <h1
          style={{ color: "var(--heading)" }}
          className="text-2xl font-bold mt-2"
        >
          Dashboard
        </h1>
        <p style={{ color: "var(--text)" }}>
          Welcome to Zubi Electronics Dashboard.
        </p>
      </div>

      <div className="statCardContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Sales"
          value="$12,450"
          change="12.5%"
          icon={DollarSign}
          changeType="increase"
          color="teal"
        />
        <StatCard
          title="New Customers"
          value="310"
          change="8.3%"
          icon={Users}
          changeType="increase"
          color="blue"
        />
        <StatCard
          title="Orders"
          value="1,230"
          change="5.2%"
          icon={ShoppingCart}
          changeType="decrease"
          color="amber"
        />
        <StatCard
          title="Revenue Growth"
          value="18%"
          change="1.2%"
          icon={BarChart}
          changeType="increase"
          color="purple"
        />
      </div>
    </section>
  );
};

export default ManagerDashboard;
