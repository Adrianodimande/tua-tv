
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Força o scroll para o topo de forma instantânea
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
