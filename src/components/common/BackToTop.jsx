import React, { useState } from "react";
import { BackArrow } from "./Icons";
const BackToTop = () => {
  const [backTop, setBackTop] = useState(false);
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 100) {
      setBackTop(true);
    } else {
      setBackTop(false);
    }
  });
  return (
    <>
      <div>
        {backTop ? (
          <span onClick={moveToTop}>
            <BackArrow />
          </span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default BackToTop;
