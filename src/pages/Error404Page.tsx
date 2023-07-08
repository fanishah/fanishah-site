import { Link } from "react-router-dom";

export default function Error404Page(): JSX.Element {
  document.title = "صفحه مورد نظر پیدا نشد - فتاح رنجبر";
  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="max-w-lg">
          <img src="/img/404.png" alt="" />
        </div>
        <div dir="rtl">
          <div className="text-5xl font-bold">اوپس...</div>
          <p className="text-2xl">متاسفم که نتوانستیم این صفحه را پیدا کنیم.</p>
          <p className="mb-8">
            اما نگران نباشید، می توانید چیزهای زیادی را در صفحه اصلی ما پیدا
            کنید.
          </p>
          <Link
            to={"/"}
            className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700"
          >
            برگشت به خانه
          </Link>
        </div>
      </div>
    </div>
  );
}
