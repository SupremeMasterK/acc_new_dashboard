import Navbar from "@/components/navbar";
import Card from "@/components/card";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  AiOutlineBank,
} from "react-icons/ai";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="ml-28 mt-[-140px] mr-20">
        <h1 className="text-2xl font-bold mb-4">Welcome Back, 👋</h1>
        <p className="text-gray-600 mb-6">
          This is your Financial Overview Report
        </p>

        <div className="flex justify-between mb-6">
          <Card
            title="Remaining"
            value="$822.58"
            dateRange="Apr 04 - May 04, 2024"
            change="-10% from last period"
            icon={<AiOutlineBank className="text-blue-500" />}
            changeColor="text-red-500"
          />
          <Card
            title="Income"
            value="$3,682.28"
            dateRange="Apr 04 - May 04, 2024"
            change="18% from last period"
            icon={<AiOutlineArrowUp className="text-green-500" />}
            changeColor="text-green-500"
          />
          <Card
            title="Expenses"
            value="-$2,687.51"
            dateRange="Apr 04 - May 04, 2024"
            change="33% from last period"
            icon={<AiOutlineArrowDown className="text-red-500" />}
            changeColor="text-green-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Transactions</h2>
            <LineChart />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <PieChart />
          </div>
        </div>
      </div>
    </section>
  );
}
