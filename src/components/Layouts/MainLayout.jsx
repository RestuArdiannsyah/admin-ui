import React from "react";
import Logo from "../Elements/Logo";
import Input from "../Elements/Input";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icon from "../Elements/Icon";
import { NavLink } from "react-router-dom";

const MainLayout = (props) => {
  const { children } = props;

  const menu = [
    { id: 1, name: "Overview", icon: <Icon.Overview />, link: "/" },
    { id: 2, name: "Balances", icon: <Icon.Balance />, link: "/balance" },
    {
      id: 3,
      name: "Transaction",
      icon: <Icon.Transaction />,
      link: "/transaction",
    },
    { id: 4, name: "Bills", icon: <Icon.Bill />, link: "/bill" },
    { id: 5, name: "Expenses", icon: <Icon.Expense />, link: "/expense" },
    { id: 6, name: "Goals", icon: <Icon.Goal />, link: "/goal" },
    { id: 7, name: "Settings", icon: <Icon.Setting />, link: "/setting" },
  ];

  return (
    <>
      <div className="flex min-h-screen bg-blue-500">
        {/* sidebar */}
        <aside className="w-28 sm:w-64 flex flex-col justify-between px-7 py-12 text-special-bg2 bg-defaultBlack">
          <div>
            <div className="mb-10">
              <Logo variant="secondary" />
            </div>
            <nav>
              {menu.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className={({ isActive }) =>
                    `flex px-4 py-3 rounded-md hover:text-white hover:font-bold hover:scale-105 ${
                      isActive
                        ? "bg-primary text-white font-bold"
                        : "hover:bg-special-bg3"
                    }`
                  }
                >
                  <div className="mx-auto sm:mx-0">{item.icon}</div>
                  <div className="ms-3 hidden sm:block">{item.name}</div>
                </NavLink>
              ))}
            </nav>
          </div>
          <div>
            <div className="flex bg-special-bg3 text-white px-4 py-3 rounded-md">
              <div className="mx-auto sm:mx-0">
                <Icon.Logout />
              </div>
              <div className="ms-3 hidden sm:block">Logout</div>
            </div>
            <div className="border my-10 border-b-special-bg"></div>
            <div className="flex justify-between items-center">
              <div>Avatar</div>
              <div className="hidden sm:block">
                Username
                <br />
                View Profile
              </div>
              <div className="hidden sm:block">
                <Icon.Detail size={15} />
              </div>
            </div>
          </div>
        </aside>
        <div className="flex flex-1 flex-col bg-special-mainBg">
          {/* navbar */}
          <header className="border border-b border-gray-05 px-6 py-7 flex justify-between items-center">
            <div className="flex items-center">
              <div className="font-bold text-2xl me-6">Username</div>
              <div className="text-gray-03 flex">
                <Icon.ChevronRight size={20} />
                <span>May 19, 2023</span>
              </div>
            </div>
            <div className="flex items-center">
              <div className="me-10">
                <NotificationsIcon className="text-gray-01 scale-110" />
              </div>
              <div>
                <Input backgroundColor="bg-white" border="border-white" />
              </div>
            </div>
          </header>
          {/* content */}
          <main className="flex-1 px-6 py-4">{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
