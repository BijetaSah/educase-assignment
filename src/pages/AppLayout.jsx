import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function AppLayout() {
  return (
    <div className="h-dvh  mx-auto overflow-y-scroll ">
      <Navbar />
      <main className="pb-8 flex justify-center px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
