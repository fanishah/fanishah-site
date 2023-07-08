import { LiaPodcastSolid } from "react-icons/lia";
import { CgMusic } from "react-icons/cg";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiCodeAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";

export default function HomePage(): JSX.Element {
  document.title = "فتاح رنجبر - توسعه دهنده وب";

  return (
    <motion.div
      variants={framermotion.container}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7" dir="rtl">
        <h1 className="text-center mb-4 text-2xl">درباره من</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <p className="py-4 px-2 md:px-8 text-justify text-gray-400">
          فتاح رنجبر هستم عاشق برنامه نویسی مخصوصا جاوا اسکریپت ، دانشجوی
          کامپیوتر و توسعه دهنده وب با Node.js و React.js. آشنایی با فریم ورک و
          کتابخانه های مختلف، همچنین دارای سابقه همکاری با تیم و پروژه های مختلف
          می باشم، با بیش از 4 سال تجربه در حوزه طراحی ، توسعه و مدیریت وب سایت.
          کنجکاو و دنبال تجربه های جدید برای به چالش کشیدن خودم و در جهتی متفاوت
          پیش بروم لذت می برم.
        </p>
        <div className="bg-gray-800 rounded-xl mx-auto w-full sm:w-10/12 lg:w-9/12 xl:w-7/12 p-4 text-center mt-2">
          <h2 className="mb-3 text-lg">علایق</h2>
          <div
            className="flex flex-wrap justify-evenly items-center space-x-2 text-gray-300"
            dir="ltr"
          >
            <div className="rounded-xl flex flex-col justify-center items-center p-3">
              <IoGameControllerOutline size="1.5em" className="mb-1" />
              بازی های ویدئویی
            </div>
            <div className="rounded-xl flex flex-col justify-center items-center p-3">
              <LiaPodcastSolid size="1.5em" className="mb-1" />
              پادکست
            </div>
            <div className="rounded-xl flex flex-col justify-center items-center p-3">
              <CgMusic size="1.5em" className="mb-1" />
              موزیک
            </div>
            <div className="rounded-xl flex flex-col justify-center items-center p-3">
              <BiCodeAlt size="1.5em" className="mb-1" />
              برنامه نویسی
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
