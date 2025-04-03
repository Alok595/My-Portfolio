import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import Home2 from "./Pages/Home2";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Resume from "./Componets/Resume";
import Result from "./Componets/Result";

const router = createBrowserRouter([
  {
    path: "/", // Make sure Home is loaded at "/"
    element: <Home />,
    children: [
      {
        index: true, // Default page when visiting "/"
        element: <Home2 />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resume",
        element: <Resume/>,
      },
      {
        path: "result",
        element: <Result/>,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
