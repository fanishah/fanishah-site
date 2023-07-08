import { NavLink } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import { RxCodesandboxLogo } from "react-icons/rx";
import { BsRocketTakeoff } from "react-icons/bs";
import { LiaDonateSolid, LiaPhoneVolumeSolid } from "react-icons/lia";

export default function Menu(): JSX.Element {
  return (
    <div className="flex justify-center md:justify-start ">
      <div
        className="bg-gray-900 flex p-6 rounded-2xl flex-wrap lg:w-full xl:w-auto"
        dir="rtl"
      >
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm py-4 w-full bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300 hover:text-white"
              }`
            }
          >
            <AiOutlineUser size="2em" />
            درباره من
          </NavLink>
        </div>
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `text-sm py-4 w-full px-[26.7px] bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300  hover:text-white"
              }`
            }
          >
            <TbNotes size="2em" />
            روزمه
          </NavLink>
        </div>
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              `text-sm py-4 w-full bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300  hover:text-white"
              }`
            }
          >
            <RxCodesandboxLogo size="1.8em" className="mt-1" />
            نمونه کار
          </NavLink>
        </div>
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/cooperation"
            className={({ isActive }) =>
              `text-sm py-4 w-full px-[26.7px] bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300  hover:text-white"
              }`
            }
          >
            <BsRocketTakeoff size="1.6em" className="mt-1 mb-0.5" />
            همکاری
          </NavLink>
        </div>
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `text-sm py-4 w-full px-[26.7px] bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300  hover:text-white"
              }`
            }
          >
            <LiaDonateSolid size="1.9em" className="mb-[1px]" />
            دونیت
          </NavLink>
        </div>
        <div className="p-1 w-4/12 md:w-2/12">
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `w-full text-sm py-4 px-[2px] bg-gray-800 bg-gradient-to-r rounded-xl flex flex-col justify-center items-center ${
                isActive
                  ? "from-[#FA5252] to-[#DD2476] text-white"
                  : "hover:from-[#FA5252] hover:to-[#DD2476] text-gray-300  hover:text-white"
              }`
            }
          >
            <LiaPhoneVolumeSolid size="1.8em" className="mb-0.5" />
            تماس با من
          </NavLink>
        </div>
      </div>
    </div>
  );
}
