import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";
import { Tooltip } from "antd";
import { FaBitcoin } from "react-icons/fa";
import { SiLitecoin } from "react-icons/si";

export default function DonatePage() {
  return (
    <motion.div
      variants={framermotion.container}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7" dir="rtl">
        <h1 className="text-center mb-4 text-2xl">دونیت</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div className="py-4 px-2 text-gray-400 text-justify space-y-4">
          <p>
            امروزه، در اینترنت محتوای زیاد وجود دارد، از کوچکترین عکس‌ها و
            متن‌ها گرفته تا محتواهایی همچون استریم‌ بازی‌ها و ویدئو‌ها که بخش
            بزرگی از محتوای اینترنتی را تشکیل می‌دهند. از درون همین محتواها،
            فرهنگ دونیت کردن پدید آمد. دونیت کردن اهدای پول در برابر محتوایی‌ست
            که می‌بینید، می‌شنوید و یا می‌خوانید. مقدار این پول اصلا اهمیتی
            ندارد، چرا که هدف اصلی این اهدای پول، حمایت از آن نوع محتواست که در
            بسیاری از این مواقع این محتوا استریم بازی‌هاست که تماشاگر بدلیل دوست
            داشتن نوع محتوایی که در حال دیدن آن است، و یا حتی شخصیت استریمر آن،
            تصمیم به اهدای پول یا همان دونیت کردن میفتد.
          </p>
          <div className="flex flex-wrap justify-evenly items-center">
            <div>
              <motion.div
                className="w-full lg:w-6/12 mt-3 px-2"
                whileHover={{ scale: 1.2 }}
              >
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="1F6nUTFRDcdYxdAwyEdzDEjdLxQqSVUAjb"
                >
                  <FaBitcoin className="text-[#EF8E19] rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.div>
            </div>
            <div className="order-first lg:order-none">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coffeebede.com/fanishah"
              >
                <img
                  width="220px"
                  src="/img/default-yellow.svg"
                  alt="coffeebede"
                />
              </a>
            </div>
            <div>
              <motion.div
                className="w-full lg:w-6/12 mt-3 px-2"
                whileHover={{ scale: 1.2 }}
              >
                <Tooltip
                  placement="top"
                  color="linear-gradient(to right, #fa5252, #dd2476)"
                  title="MSa8v1GfDxhXjpGBV7jYzihBN2JywPbuFM"
                >
                  <SiLitecoin className="text-[#325A98] rounded-sm text-[2.9rem] m-2" />
                </Tooltip>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
