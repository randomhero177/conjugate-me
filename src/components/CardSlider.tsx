"use client";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface CardConfig {
  title: string;
  description: string;
  separator?: string;
  link?: string;
}

interface CardConfigList {
  cardsList: CardConfig[];
}

export function CardSlider({ cardsList }: CardConfigList) {
  const [isMobile, setIsMobile] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    console.log("hey");
    const checkMobile = () => setIsMobile(window.innerWidth < 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="overflow-hidden" ref={isMobile ? emblaRef : null}>
      <div className="embla__container">
        {cardsList.map((cardItem, index) => (
          <div
            className="embla__slide card-list__slide"
            key={`${index}+cardsListitem`}
          >
            <div className="group md:flex-1 flex bg-white shadow-lg  transition-transform transform hover:scale-105">
              <div className="p-6 flex flex-col flex-1 items-center">
                <div className="mb-4 w-14 h-14 flex items-center justify-center text-xl font-semibold text-white bg-gray-600 rounded-full transition-colors duration-300 group-hover:bg-gray-900">
                  {index + 1}
                </div>
                <h2 className="text-xl text-center font-semibold text-gray-700 mb-2">
                  {cardItem.title}
                </h2>
                <p
                  className="text-gray-600 text-center"
                  dangerouslySetInnerHTML={{ __html: cardItem.description }}
                />
              </div>
            </div>
            {cardItem.separator &&
              !(!isMobile && index === cardsList.length - 1) && (
                <div className="px-8 text-2xl font-bold text-center my-2 md:my-8 lg:flex items-center text-gray-800">
                  {cardItem.separator}
                </div>
              )}
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="card-list__buttons flex justify-between items-center ps-4 -mt-8">
          <button
            className="embla__prev px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 shadow transition"
            onClick={scrollPrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="embla__next ml-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 shadow transition"
            onClick={scrollNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
