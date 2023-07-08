import { FaLinkedinIn, FaGithub, FaDiscord, FaTelegram } from "react-icons/fa";
import { BsFillCalendar2DateFill, BsPhoneFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

export default function Sidebar(): JSX.Element {
  return (
    <div className={`w-full mb-7 px-3`} dir="rtl">
      <div id="sidebar" className="w-full">
        <div className="bg-gray-900 rounded-3xl pb-7 flex flex-col">
          <img
            className="rounded-3xl w-[250px] sm:w-[300px] md:w-[180px] lg:w-[200px]  mx-auto md:-mt-[120px] -mt-[140px]"
            src="./img/logo.jpg"
            alt="fanishah"
          />
          <h1 className="text-center my-4 text-2xl cursor-default">
            فتاح رنجبر
          </h1>
          <div className="bg-gray-800 mx-auto py-1 px-5 rounded-lg text-gray-400 hover:text-white hover:color-red-custom-1 transition-all cursor-default">
            توسعه دهنده وب
          </div>
          <div className="flex justify-center my-5 flex-wrap">
            <a
              className="ml-2 text-white bg-gray-800 pt-2.5 pb-2 px-2.5 rounded-lg bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476]"
              href="https://www.linkedin.com/in/fattah-ranjbar-83b9b0134/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size="1.6em" />
            </a>
            <a
              className="ml-2 text-white bg-gray-800 pt-2.5 pb-2 px-2.5 rounded-lg bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476]"
              href="https://github.com/fanishah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="1.6em" />
            </a>
            <a
              className="ml-2 text-white bg-gray-800 pt-2 pb-2 px-2 rounded-lg bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476]"
              href="https://discord.gg/d8CTn4bghf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size="1.8em" />
            </a>
            <a
              className="ml-2 text-white bg-gray-800 pt-2.5 pb-2 px-2.5 rounded-lg bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476]"
              href="https://t.me/fanishah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram size="1.6em" />
            </a>
          </div>
          <div className="px-4 lg:px-6">
            <div className="bg-gray-800 rounded-xl p-4 space-y-2">
              <div className="flex bg-gray-900 rounded-lg p-1 items-center justify-start pr-2.5">
                <BsFillCalendar2DateFill size="1.3em" className="" />
                <div className="mr-2">
                  <p className="text-xs text-gray-400">تاریخ تولد</p>
                  <p>اسفند 1379</p>
                </div>
              </div>
              <div className="flex bg-gray-900 rounded-lg p-1 items-center justify-start pr-1.5">
                <BsPhoneFill size="1.5em" className="mr-0.5" />
                <div className="mr-2">
                  <p className="text-xs text-gray-400">شماره موبایل</p>
                  <p>09000000000</p>
                </div>
              </div>
              <div className="flex bg-gray-900 rounded-lg p-1 items-center justify-start">
                <HiLocationMarker size="1.5em" className="mr-1" />
                <div className="mr-2">
                  <p className="text-xs text-gray-400">محل سکونت</p>
                  <p>ایران ، اصفهان</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
