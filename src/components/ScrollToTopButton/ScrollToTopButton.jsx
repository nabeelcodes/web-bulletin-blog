import { useEffect, useState, useCallback, useRef } from "react";
import { StyledButton } from "./ScrollToTopButton.styled";
import { motion } from "framer-motion";

export default function ScrollToTopButton() {
  const [gotoTop, setGotoTop] = useState(false);
  const scrollButtonRef = useRef(null);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = useCallback(() => {
    if (window.scrollY > 900) {
      setGotoTop(true);
    } else {
      setGotoTop(false);
    }

    /* pushing the button up when it's about to hit footer */
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      scrollButtonRef?.current?.classList?.add("move-up");
    } else {
      scrollButtonRef?.current?.classList?.remove("move-up");
    }
  }, [setGotoTop]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      {gotoTop && (
        <StyledButton
          as={motion.button}
          ref={scrollButtonRef}
          whileTap={{ scale: 0.85 }}
          onClick={scrollToTop}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.293 1.293C11.4805 1.10553 11.7348 1.00021 12 1.00021C12.2652 1.00021 12.5195 1.10553 12.707 1.293L17.707 6.293C17.8892 6.4816 17.99 6.7342 17.9877 6.9964C17.9854 7.2586 17.8802 7.50941 17.6948 7.69482C17.5094 7.88023 17.2586 7.9854 16.9964 7.98767C16.7342 7.98995 16.4816 7.88916 16.293 7.707L13 4.414V22C13 22.2652 12.8946 22.5196 12.7071 22.7071C12.5196 22.8946 12.2652 23 12 23C11.7348 23 11.4804 22.8946 11.2929 22.7071C11.1054 22.5196 11 22.2652 11 22V4.414L7.707 7.707C7.5184 7.88916 7.2658 7.98995 7.0036 7.98767C6.7414 7.9854 6.49059 7.88023 6.30518 7.69482C6.11977 7.50941 6.0146 7.2586 6.01233 6.9964C6.01005 6.7342 6.11084 6.4816 6.293 6.293L11.293 1.293Z"
              fill="white"
            />
          </svg>
        </StyledButton>
      )}
    </>
  );
}
