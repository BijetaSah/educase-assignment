import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function AppLayout() {
  return (
    <div className="h-dvh  mx-auto overflow-y-scroll ">
      <Navbar />
      <main className="pb-20 flex justify-center px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
