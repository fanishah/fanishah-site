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
      <div
        className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7"
        dir="rtl"
      >
        <h1 className="text-center mb-4 text-2xl">درباره من</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div className="py-4 px-2 md:px-8 text-justify text-gray-400 space-y-2">
          <p>
            سلام من فتاح رنجبر هستم؛ یک توسعه‌دهنده وب با تمرکز روی بک‌اند و
            عمیقاً عاشق دنیای جاوا اسکریپت ، دنیای من از سیستم‌های سمت‌سرور،
            معماری‌های تمیز، ساخت سرویس‌های سریع و مقیاس‌پذیر با Node.js شروع
            می‌شه و تا طراحی تجربه‌های کامل‌تر با فناوری‌های مدرن ادامه پیدا
            می‌کنه.
          </p>
          <p>
            به عنوان کسی که همیشه کنجکاویش یک قدم جلوتر از خودش می‌دوه، هر
            تکنولوژی جدیدی رو مثل یک سرنخ تازه در یک معمای جذاب می‌بینم. عاشق
            اینم که بدونم پشت هر ابزار، فریم‌ورک یا معماری، چی می‌گذره؛ چرا کار
            می‌کنه، چطور بهتر می‌شه، و چه‌جوری می‌تونم پیچیدگی‌هاش رو باز کنم.
          </p>
          <p>
            پا به دنیای وب گذاشتم چون ساختن برام یک جور اعتیاد شیرینه؛ لذت خلق
            کردن، حل مسئله‌های چالش‌برانگیز، و دیدن اینکه یک ایده چطور تبدیل به
            یک محصول واقعی و قابل استفاده می‌شه… اینا چیزهایی هستن که باعث می‌شن
            هر روز با انگیزهٔ بیشتر ادامه بدم.
          </p>
        </div>
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
