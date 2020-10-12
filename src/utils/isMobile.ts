import {useState, useEffect} from "react";

export default function useIsMobile() {
  
  const [mobile, setMobile] = useState(false);

  function changeMobile() {
    setMobile(window.innerWidth < 650);
  }

  useEffect(() => {
    window.addEventListener("resize", changeMobile);
    changeMobile()
    return () => {
      window.removeEventListener("resize", changeMobile);
    };
  }, []);
  return mobile;
}