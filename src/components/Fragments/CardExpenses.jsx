import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

const iconMap = {
  housing: Icon.House,
  food: Icon.Food,
  transportation: Icon.Transport,
  entertainment: Icon.Movie,
  shopping: Icon.Shopping,
  others: Icon.Other,
};

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

function CardExpenses(props) {
  const { data } = props;

  const isLoading = !data || data.length === 0;

  const expenseData = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
      {data?.map((expense, index) => {
        const CategoryIcon = iconMap[expense.category] || Icon.Other;

        return (
          <div
            key={index}
            className="rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-600 shadow-md"
          >
            {/* Header kategori */}
            <div className="flex items-center justify-between bg-gray-06 dark:bg-dark px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-md dark:bg-dark-komponen ">
                  <CategoryIcon size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-02">
                    {capitalize(expense.category)}
                  </div>
                  <div className="font-bold text-lg">${expense.amount}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-semibold">{expense.percentage}%</span>
                  {expense.trend === "up" ? (
                    <Icon.ArrowUp size={14} className="text-special-red" />
                  ) : (
                    <Icon.ArrowDown size={14} className="text-special-green" />
                  )}
                </div>
                <div className="text-xs text-gray-03">
                  Compare to the last month
                </div>
              </div>
            </div>

            {/* List detail transaksi */}
            <div className="divide-y divide-gray-05 dark:divide-zinc-600">
              {expense.detail?.map((item, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-4 py-3"
                >
                  <span className="text-sm">{item.item || "-"}</span>
                  <div className="text-right">
                    <div className="text-sm font-semibold">${item.amount}</div>
                    <div className="text-xs text-gray-03">{item.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <>
      <Card
        title="Expenses Breakdown"
        desc={
          isLoading ? (
            <div className="flex flex-col justify-center items-center h-full text-primary py-10">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              Loading Data
            </div>
          ) : (
            expenseData
          )
        }
      />
    </>
  );
}

export default CardExpenses;
