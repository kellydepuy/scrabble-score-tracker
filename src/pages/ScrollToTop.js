import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//component makes sure the window resets at top of page when user moves through app
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}