import React, { useState } from "react";
import LeftArrowCarousel from "./LeftArrowCarousel";
import RightArrowCarousel from "./RightArrowCarousel";

const MAX_VISIBILITY = 3;

function Carousel({ children }) {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      <LeftArrowCarousel
        active={active}
        setActive={setActive}
        className="actionSlide left"
      />
      {React.Children.map(children, (child, i) => (
        <div
          className="cardSlide"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      <RightArrowCarousel
        active={active}
        setActive={setActive}
        className="actionSlide right"
        count={count}
      />
    </div>
  );
}

export default Carousel;
