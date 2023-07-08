import { motion } from "framer-motion";
import framermotion from "../utils/framermotion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { BiLoaderAlt } from "react-icons/bi";

interface ResSendEmail {
  status: number;
  text: string;
}

export default function CooperationPage(): JSX.Element {
  document.title = "همکاری - فتاح رنجبر";
  const [sending, setSending] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [disordId, setDdisordId] = useState("");
  const [telegram, setTelegram] = useState("");
  const [des, setDes] = useState("");

  const HandelSend = async (e: any): Promise<void> => {
    setSending(true);
    e.preventDefault();
    const data = { fullname, email, disordId, telegram, des };

    const sendEmail: ResSendEmail = await emailjs.send(
      "service_0ygu2b8",
      "template_qfjaubq",
      data,
      "Pq_bTlzIlELFaQzB9"
    );

    if (sendEmail.status !== 200) {
      toast.error("خطا در ارسال ایمیل رخ داد.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    toast.success("درخواست همکاری ارسال شد.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    setFullname("");
    setEmail("");
    setDdisordId("");
    setTelegram("");
    setDes("");
    setTimeout(() => {
      setSending(false);
    }, 2000);
  };

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
        <h1 className="text-center mb-4 text-2xl">همکاری</h1>
        <hr className="border-t-4 rounded-full my-auto border-gray-800 w-full" />
        <div className="py-4 px-2 text-gray-400">
          <p>
            در صورتی که نیاز به همکار در پروژه خود دارید حتی برای نمونه کار ، می
            تونید فرم زیر رو پر کن.
          </p>
          <br />
          <form action="#" onSubmit={HandelSend} method="post">
            <div className="flex flex-wrap">
              <div className="p-1 w-full sm:w-6/12 h-12">
                <input
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                  value={fullname}
                  autoComplete="off"
                  type="text"
                  className="pr-1 rounded-md h-full w-full text-sm border-gray-600 bg-gray-700 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="نام و نام خانوادگی *"
                  required
                />
              </div>
              <div className="p-1 w-full sm:w-6/12 h-12 ">
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="off"
                  value={email}
                  type="email"
                  className="pr-1 rounded-md h-full w-full text-sm border-gray-700 bg-gray-700 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="ایمیل *"
                  required
                />
              </div>
              <div className="p-1 w-full sm:w-6/12 h-12">
                <input
                  onChange={(e) => {
                    setDdisordId(e.target.value);
                  }}
                  value={disordId}
                  autoComplete="off"
                  type="text"
                  className="pr-1 rounded-md h-full w-full text-sm border-gray-700 bg-gray-700 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="دیسکورد"
                />
              </div>
              <div className="p-1 w-full sm:w-6/12 h-12">
                <input
                  onChange={(e) => {
                    setTelegram(e.target.value);
                  }}
                  autoComplete="off"
                  value={telegram}
                  type="text"
                  className="pr-1 rounded-md h-full w-full text-sm border-gray-700 bg-gray-700 text-gray-900 focus:outline-none focus:borer-rose-600"
                  placeholder="تلگرام"
                />
              </div>
              <div className="p-1 w-full h-12 mb-10">
                <textarea
                  onChange={(e) => {
                    setDes(e.target.value);
                  }}
                  value={des}
                  className="pr-1 pt-2 rounded-md w-full text-sm border-b-2 border-gray-600 bg-gray-700 text-gray-900 focus:outline-none focus:borer-rose-600"
                  name="des"
                  rows={4}
                  placeholder="توضیحات"
                  required
                ></textarea>
              </div>
              <div className="w-full pt-3" dir="rtl">
                <button
                  disabled={sending}
                  className="bg-gray-700 disabled:bg-gray-600 flex justify-center items-center bg-gradient-to-r hover:from-[#FA5252] hover:to-[#DD2476] hover:text-white transition-all ease-in-out rounded-lg py-1 px-8"
                >
                  ارسال
                  {sending && <BiLoaderAlt className="animate-spin mr-1" />}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
