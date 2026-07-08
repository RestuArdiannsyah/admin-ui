import React, { useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpenses from "../components/Fragments/CardExpenses";
import { expensesService } from "../services/dataService";

const Expenses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await expensesService();
        setData(result);
      } catch (err) {
        console.error("Gagal mengambil data expenses:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <MainLayout>
      <h1 className="mb-6">Expenses</h1>
      <CardExpenses data={data} />
    </MainLayout>
  );
};

export default Expenses;