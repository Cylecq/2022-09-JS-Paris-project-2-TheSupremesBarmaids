import { TiChevronRightOutline } from "react-icons/ti";

function RightArrowCarousel({ active, setActive, className, count }) {
  return (
    active < count - 1 && (
      <button
        type="button"
        className={className}
        onClick={() => setActive((i) => i + 1)}
      >
        <TiChevronRightOutline />
      </button>
    )
  );
}

export default RightArrowCarousel;
