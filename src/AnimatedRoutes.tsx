import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import { AnimatePresence } from "framer-motion";
import JoinSession from "./views/JoinSession/JoinSession";
import LandingLayout from "./layouts/LandingLayout/LandingLayout";
import CreateSession from "./views/CreateSession/CreateSession";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode={"wait"} initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route element={<LandingLayout />}>
          <Route
            path={"/"}
            element={
              <LandingPage />
            }
          />
          <Route path={"/join/:session_id?"} element={<JoinSession />} />
          <Route path={"/host"} element={<CreateSession />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
