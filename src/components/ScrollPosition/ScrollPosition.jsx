import { useEffect, useState } from "react";
const getScrollY = () => window.scrollY || 0;
const ScrollPosition = (props) => {
  const { render } = props;
  const [scrollPosY, setScrollPosY] = useState(getScrollY);
  useEffect(() => {
    const handlerScroll = () => {
      setScrollPosY(window.scrollY);
    };
    handlerScroll();
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);
  return render({ scrollPosY });
};

export default ScrollPosition;
