import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
const MainPageLazy = lazy(() => import("./MainPage/ui/MainPage"));
const AboutPageLazy = lazy(() => import("./AboutPage/ui/AboutPage"));
export const Routing = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/about" element={<AboutPageLazy />} />
        <Route path="/" element={<MainPageLazy />}></Route>
      </Routes>
    </Suspense>
  );
};
