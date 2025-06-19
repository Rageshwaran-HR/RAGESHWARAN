import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Index from "../pages/Index"; // Import the Index page
import "./styles.css"; // Ensure styles are included

const Loader = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);

  // Helper to generate counter-3 digits as per original logic
  const generateCounter3Digits = () => {
    const digits = [];
    // 0-9 two times
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        digits.push(<div className="num" key={`c3-${i * 10 + j}`}>{j}</div>);
      }
    }
    // One final 0
    digits.push(<div className="num" key="c3-final">0</div>);
    return digits;
  };

  useEffect(() => {
    // Animate the counters
    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalHeight =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalHeight,
        duration: duration,
        ease: "power2.inOut",
        delay: delay,
      });
    }

    if (
      counter3Ref.current &&
      counter2Ref.current &&
      counter1Ref.current
    ) {
      animate(counter3Ref.current, 5);
      animate(counter2Ref.current, 6);
      animate(counter1Ref.current, 2, 4);
    }

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.from(".loader-1", {
      width: "0",
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.from(".loader-2", {
      width: "0",
      delay: 1.9,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      duration: 0.1,
      delay: 6,
    });

    gsap.to(".loader-1", {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader-2", {
      rotate: 90,
      x: -75,
      y: 75,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(".loader", {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      rotate: 45,
      y: 600,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });

    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <div className="loading-screen">
        <div className="loader">
          <div className="loader-1 bar"></div>
          <div className="loader-2 bar"></div>
        </div>
        <div className="counter">
          <div className="counter-1 digit" ref={counter1Ref}>
            <div className="num">0</div>
            <div className="num num1offset1">1</div>
          </div>
          <div className="counter-2 digit" ref={counter2Ref}>
            <div className="num">0</div>
            <div className="num num1offset2">1</div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit" ref={counter3Ref}>
            {/* Dynamically generated digits */}
            {generateCounter3Digits()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;