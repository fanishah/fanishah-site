import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import MainLayout from "./components/layout/MainLayout";
import Error404Page from "./pages/Error404Page";
import PortfolioPage from "./pages/PortfolioPage";
import CooperationPage from "./pages/CooperationPage";
import DonatePage from "./pages/DonatePage";
import ContactUsPage from "./pages/ContactUsPage";

let routers = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "resume",
        element: <ResumePage />,
      },
      {
        path: "portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "cooperation",
        element: <CooperationPage />,
      },
      {
        path: "donate",
        element: <DonatePage />,
      },
      {
        path: "contact-us",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404Page />,
  },
];

export default routers;
