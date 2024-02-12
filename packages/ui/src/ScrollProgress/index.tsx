// @ts-ignore
import styles from "./styles.module.scss";
import { useEffect, useRef } from "react";

const ScrollProgress = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const { scrollHeight, clientHeight } = document.documentElement;
        const scrollTop = window.scrollY;
        const scrollPercentage =
          (scrollTop / (scrollHeight - clientHeight)) * 100;
        scrollRef.current.style.width = `${scrollPercentage}%`;
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return <div className={styles.scrollProgress} ref={scrollRef} />;
};

export default ScrollProgress;
