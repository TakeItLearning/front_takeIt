import { useState } from "react";

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    "https://source.unsplash.com/random/400x400?sig=1",
    "https://source.unsplash.com/random/400x400?sig=2",
  ];
  const titles = ["Title 1", "Title 2"];
  const descriptions = ["Description 1", "Description 2"];

  const handlePrev = () => {
    setActiveIndex(activeIndex === 0 ? images.length - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === images.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="relative h-96 w-full">
      {/* Image */}
      <div className="absolute top-0 right-0 h-full w-2/3">
        <img
          className="h-full w-full object-cover"
          src={images[activeIndex]}
          alt={titles[activeIndex]}
        />
      </div>
      {/* Content */}
      <div className="absolute top-0 left-0 h-full w-1/3 bg-white p-4">
        <h2 className="text-lg font-medium mb-2">{titles[activeIndex]}</h2>
        <p className="text-sm text-gray-500 mb-4">
          {descriptions[activeIndex]}
        </p>
        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            className="px-4 py-2 rounded-md bg-gray-200"
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className="px-4 py-2 rounded-md bg-gray-200"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
