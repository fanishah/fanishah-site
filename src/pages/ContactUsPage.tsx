import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";
import { BsTelegram, BsDiscord } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";

export default function ContactUsPage() {
  return (
    <motion.div
      variants={framermotion.container}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7" dir="rtl">
        <h1 className="text-center mb-4 text-2xl">تماس با من</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div
          className="py-4 px-2 text-gray-400 space-y-2 flex-wrap flex justify-center items-center"
          dir="ltr"
        >
          <div className="flex w-full md:w-6/12 justify-start items-center space-x-2">
            <BsDiscord size="2rem" />
            <p className="text-lg mt-1.5">fanishah</p>
          </div>
          <div className="flex w-full md:w-6/12 justify-start items-center space-x-2">
            <BsTelegram size="2rem" />
            <p className="text-lg mt-1.5">fanishah</p>
          </div>
          <div className="flex w-full md:w-6/12 justify-start items-center space-x-2">
            <AiFillInstagram size="2rem" />
            <p className="text-lg mt-1.5">fanishahw</p>
          </div>
          <div className="flex w-full md:w-6/12 justify-start items-center space-x-2">
            <MdEmail size="2rem" />
            <p className="text-lg mt-1.5">fattah.ranjbar@gmail.com</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
