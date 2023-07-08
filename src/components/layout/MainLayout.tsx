import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import Sidebar from "../Sidebar";

export default function MainLayout(): JSX.Element {
  return (
    <div className="w-full xl:w-9/12 mx-auto flex flex-wrap pt-40 pb-10">
      <div className="w-full md:w-8/12 xl:w-9/12 order-last md:order-none space-y-7 px-5">
        <Menu />
        <Outlet />
      </div>
      <div className="w-full md:w-4/12 xl:w-3/12">
        <Sidebar />
      </div>
    </div>
  );
}
