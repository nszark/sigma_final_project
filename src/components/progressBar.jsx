import React, { useState, useEffect, useCallback, useRef } from "react";

const ProgressBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0); // state to keep track of the current scroll position

  const handleScroll = useCallback(() => { // memoized function to handle scroll events
    const position = window.pageYOffset;
    setScrollPosition(position);
  }, [setScrollPosition]);

  useEffect(() => { // effect to add and remove the scroll event listener when the component mounts/unmounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => { // effect to update the scrollHeight and clientHeight refs when the window is resized or the content changes
    const handleResize = () => {
      scrollHeight.current = document.documentElement.scrollHeight;
      clientHeight.current = document.documentElement.clientHeight;
    };
  
    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("DOMSubtreeModified", handleResize, { passive: true });
  
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("DOMSubtreeModified", handleResize);
    };
  }, []);

  const scrollHeight = useRef(document.documentElement.scrollHeight); // ref to store the initial scrollHeight
  const clientHeight = useRef(document.documentElement.clientHeight); // ref to store the initial clientHeight

  const getScrollHeight = () => { // function to calculate the total scrollable height of the page
    return scrollHeight.current - clientHeight.current;
  };

  return (
    <div className="_container-progress-bar">
      <div className="progress-bar-container">
        <div className="scrollPosition">{scrollPosition}</div> 
        <div className="progress-bar" style={{ width: `${((scrollPosition / getScrollHeight()) * 100).toFixed(2)}%` }}></div> 
      </div>
    </div>
  );
};

export default ProgressBar;
