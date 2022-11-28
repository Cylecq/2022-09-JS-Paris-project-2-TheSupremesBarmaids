import { TiChevronLeftOutline } from "react-icons/ti";

function LeftArrowCarousel({ active, setActive, className }) {
  return (
    active > 0 && (
      <button
        type="button"
        className={className}
        onClick={() => setActive((i) => i - 1)}
      >
        <TiChevronLeftOutline />
      </button>
    )
  );
}

export default LeftArrowCarousel;
