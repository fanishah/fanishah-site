import { Tooltip } from "antd";
import { TbNotes } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNestjs,
  SiCss3,
  SiTailwindcss,
  SiMongodb,
  SiGit,
  SiSocketdotio,
  SiExpress,
  SiFigma,
  SiNginx,
  SiHtml5,
  SiBootstrap,
  SiMysql,
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandNextjs, TbBrandCpp } from "react-icons/tb";
import { HiMiniBriefcase } from "react-icons/hi2";
import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";

export default function ResumePage(): JSX.Element {
  document.title = "رزومه - فتاح رنجبر";
  return (
    <motion.div
      variants={framermotion.container}
      initial="hidden"
      animate="visible"
    >
      <div
        className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7"
        dir="rtl"
      >
        <h1 className="text-center mb-4 text-2xl">رزومه</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div className="py-4 px-2 text-gray-400">
          <div className="mt-4 mb-2 flex items-center">
            <TbNotes size="2em" className="text-[#F95054]" />
            <p className="text-xl mr-1">مهارت ها</p>
          </div>
          <div>
            <motion.ul
              className="flex flex-wrap justify-center items-center"
              variants={framermotion.container}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="JavaScript"
                >
                  <SiJavascript className="text-yellow-400 rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="TypeScript"
                >
                  <SiTypescript className="text-[#2f74c0] rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Node.js"
                >
                  <IoLogoNodejs className="text-[#57a646] rounded-sm text-[3.5rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="React.js"
                >
                  <SiReact className="text-[#5ed3f3] rounded-sm text-[3.1rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Nest.js"
                >
                  <SiNestjs className="text-[#e0234e] rounded-sm text-[3.1rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Next.js"
                >
                  <TbBrandNextjs className="text-[#fff] rounded-sm text-[3.3rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="CSS"
                >
                  <SiCss3 className="text-[#264de4] rounded-sm  text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="HTML"
                >
                  <SiHtml5 className="text-[#dd4b25] text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="MongoDB"
                >
                  <SiMongodb className="text-[#519747] rounded-sm  text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="C / C++"
                >
                  <TbBrandCpp className="text-white rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Git"
                >
                  <SiGit className="text-[#f05033] rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Socket.IO"
                >
                  <SiSocketdotio className="text-[#3a3a3a] rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Express.js"
                >
                  <SiExpress className="text-[#fff] rounded-sm text-[2.7rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Figma"
                >
                  <SiFigma className="text-[#fff] rounded-sm text-[2.7rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Nginx"
                >
                  <SiNginx className="text-[#009137] rounded-sm text-[2.7rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Linux"
                >
                  <FcLinux className="text-[3.3rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Mysql"
                >
                  <SiMysql className="text-[#895500] text-[3.8rem] m-2" />
                </Tooltip>
              </motion.li>
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Tailwind CSS"
                >
                  <SiTailwindcss className="text-[#07b6d5] rounded-sm  text-[3.3rem] m-2" />
                </Tooltip>
              </motion.li>{" "}
              <motion.li variants={framermotion.item}>
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="Bootstrap"
                >
                  <SiBootstrap className="text-[#7010ef] rounded-sm  text-[3.3rem] m-2" />
                </Tooltip>
              </motion.li>
            </motion.ul>
          </div>
          <div className="mt-6 mb-2 flex items-center">
            <HiMiniBriefcase size="2em" className="text-[#F95054]" />
            <p className="text-xl mr-1">مدارک</p>
          </div>
          <div className="flex justify-evenly items-center flex-wrap lg:px-5">
            <motion.div
              className="w-full lg:w-6/12 mt-3 lg:px-2"
              whileHover={{ scale: 1.2 }}
            >
              <img
                className="rounded-lg mx-auto"
                src="./img/certificate-nodejs.jpg"
                alt="openclassrooms"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-6/12 mt-3 lg:px-2"
              whileHover={{ scale: 1.2 }}
            >
              <img
                className="rounded-lg mx-auto"
                src="./img/certificate-js.jpg"
                alt="openclassrooms"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-6/12 mt-3 lg:px-2"
              whileHover={{ scale: 1.2 }}
            >
              <img
                className="rounded-lg mx-auto"
                src="./img/certificate-ux.jpg"
                alt="openclassrooms"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-6/12 mt-3 lg:px-2"
              whileHover={{ scale: 1.2 }}
            >
              <img
                className="rounded-lg mx-auto"
                src="./img/certificate-react.jpg"
                alt="openclassrooms"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="w-full lg:w-6/12 mt-3 lg:px-2"
              whileHover={{ scale: 1.2 }}
            >
              <img
                className="rounded-lg mx-auto"
                src="./img/certificate-ui.jpg"
                alt="openclassrooms"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
