import mongoose from "mongoose";

// === TYPES ===
export type KpiType = {
  totalProfit: string;
  totalRevenue: string;
  totalExpenses: string;
  expensesByCategory: ExpensesByCategoryType;
  dailyData: [DailyDataType];
  monthlyData: [MonthlyDataType];
};

export type ExpensesByCategoryType = {
  salaries: string;
  supplies: string;
  services: string;
};

export type DailyDataType = {
  day: string;
  revenue: string;
  expenses: string;
};

export type MonthlyDataType = {
  month: string;
  revenue: string;
  expenses: string;
  operationalExpenses: string;
  nonOperationalExpenses: string;
};

// === SCHEMA ===

const daySchema = new mongoose.Schema({
  day: String,
  revenue: String,
  expenses: String,
});

const monthSchema = new mongoose.Schema({
  month: String,
  revenue: String,
  expenses: String,
  operationalExpenses: String,
  nonOperationalExpenses: String,
});

const kpiSchema = new mongoose.Schema(
  {
    totalProfit: {
      type: String,
    },
    totalRevenue: { type: String },
    totalExpenses: { type: String },
    expensesByCategory: { type: Map, of: String },
    dailyData: [daySchema],
    monthlyData: [monthSchema],
  },
  { timestamps: true }
);

const Kpi = mongoose.model<KpiType>("Kpi", kpiSchema);
export default Kpi;
