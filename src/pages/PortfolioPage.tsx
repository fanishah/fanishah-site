import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";
import { BsWordpress } from "react-icons/bs";
import {
  SiTailwindcss,
  SiTypescript,
  SiBootstrap,
  SiNestjs,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import { BiLoaderAlt } from "react-icons/bi";
import { useRef, useState } from "react";

export default function PortfolioPage(): JSX.Element {
  document.title = "رزومه - فتاح رنجبر";
  const refImage: any = useRef();
  const [isLoad, setIsLoad] = useState(false);

  return (
    <motion.div
      variants={framermotion.container}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-gray-900 rounded-xl pt-6 pb-10 px-3 md:px-5 lg:px-7" dir="rtl">
        <h1 className="text-center mb-4 text-2xl">نمونه کار</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div className="py-4 px-2">
          <div className="flex justify-evenly items-center text-gray-400 flex-wrap lg:px-5 ">
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/fatsgift.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <SiNestjs size="2em" />
                  <TbBrandNextjs size="2em" />
                  <SiTailwindcss size="2em" />
                  <SiTypescript size="2em" />
                </div>
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/hashtagrp.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <FaReact size="2em" />
                  <FaNodeJs size="2em" />
                  <SiTailwindcss size="2em" />
                  <SiTypescript size="2em" />
                </div>{" "}
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="https://gameq.ir/index.html/?p=fanishah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" bg-gray-950 rounded-lg px-2 py-3">
                  <img
                    className="rounded-lg mx-auto"
                    src="./img/gameq.jpg"
                    alt="openclassrooms"
                    loading="lazy"
                    ref={refImage}
                    onLoad={(e) => {
                      setIsLoad(true);
                    }}
                  />
                  <div
                    className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                    dir="ltr"
                  >
                    <BiLogoPhp size="2em" />
                    <BsWordpress size="2em" />
                    <SiTailwindcss size="2em" />
                  </div>{" "}
                  {!isLoad && (
                    <div className="w-full h-44 flex justify-center items-center">
                      <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="https://gamezila.ir/?p=fanishah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" bg-gray-950 rounded-lg px-2 py-3">
                  <img
                    className="rounded-lg mx-auto"
                    src="./img/gamezila.jpg"
                    alt="openclassrooms"
                    loading="lazy"
                    ref={refImage}
                    onLoad={(e) => {
                      setIsLoad(true);
                    }}
                  />
                  <div
                    className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                    dir="ltr"
                  >
                    <BiLogoPhp size="2em" />
                    <BsWordpress size="2em" />
                    <SiTailwindcss size="2em" />
                  </div>{" "}
                  {!isLoad && (
                    <div className="w-full h-44 flex justify-center items-center">
                      <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/lionrp.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <FaReact size="2em" />
                  <FaNodeJs size="2em" />
                  <SiTailwindcss size="2em" />
                  <SiTypescript size="2em" />
                </div>{" "}
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/greenmag.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <SiNestjs size="2em" />
                  <TbBrandNextjs size="2em" />
                  <SiTailwindcss size="2em" />
                  <SiTypescript size="2em" />
                </div>{" "}
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/cutq.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <BiLogoPhp size="2em" />
                  <SiBootstrap size="2em" />
                </div>{" "}
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <div className=" bg-gray-950 rounded-lg px-2 py-3">
                <img
                  className="rounded-lg mx-auto"
                  src="./img/gamez.jpg"
                  alt="openclassrooms"
                  loading="lazy"
                  ref={refImage}
                  onLoad={(e) => {
                    setIsLoad(true);
                  }}
                />
                <div
                  className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                  dir="ltr"
                >
                  <BiLogoPhp size="2em" />
                  <BsWordpress size="2em" />
                  <SiBootstrap size="2em" />
                </div>{" "}
                {!isLoad && (
                  <div className="w-full h-44 flex justify-center items-center">
                    <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                  </div>
                )}
              </div>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="http://npmjs.com/package/zarinpal-pay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" bg-gray-950 rounded-lg px-2 py-3">
                  <img
                    className="rounded-lg mx-auto"
                    src="./img/zarinpal-pay.png"
                    alt="openclassrooms"
                    loading="lazy"
                    ref={refImage}
                    onLoad={(e) => {
                      setIsLoad(true);
                    }}
                  />
                  <div
                    className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                    dir="ltr"
                  >
                    <SiTypescript size="2em" className="text-[#2f74c0]" />
                  </div>{" "}
                  {!isLoad && (
                    <div className="w-full h-32 flex justify-center items-center">
                      <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
            <motion.div
              className="portfolio w-full lg:w-6/12 mt-3 p-1 relative z-0"
              whileHover={{ scale: 1.2 }}
            >
              <a
                href="http://npmjs.com/package/eazy-idpay"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className=" bg-gray-950 rounded-lg px-2 py-3">
                  <img
                    className="rounded-lg mx-auto"
                    src="./img/eazy-idpay.png"
                    alt="openclassrooms"
                    loading="lazy"
                    ref={refImage}
                    onLoad={(e) => {
                      setIsLoad(true);
                    }}
                  />
                  <div
                    className="absolute hidden opacity-0 bottom-5 left-4 space-x-2"
                    dir="ltr"
                  >
                    <SiTypescript size="2em" className="text-[#2f74c0]" />
                  </div>
                  {!isLoad && (
                    <div className="w-full h-32 flex justify-center items-center">
                      <BiLoaderAlt size="4em" className="animate-spin" />{" "}
                    </div>
                  )}
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
