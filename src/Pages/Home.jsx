import React, { useState } from "react";
import SideBar from "../Componets/SideBar";
import { Outlet } from "react-router-dom";
import Preloader from "../Componets/Preloader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
        <div className="h-screen w-full flex">
          <SideBar />
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      )}
    </>
  );
};

export default Home;
