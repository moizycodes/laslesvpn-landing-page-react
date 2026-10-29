import { useRef, useState } from "react";
import Container from "../common/Container";

const testimonials = [
  {
    id: 1,
    name: "Viezh Robert",
    location: "Warsaw, Poland",
    rating: "4.5",
    image: "/assets/images/testimonials/customer-1.png",
    review:
      "Wow... I am very happy to use this VPN. It turned out to be more than my expectations and so far there have been no problems.",
  },
  {
    id: 2,
    name: "Yessica Christy",
    location: "Shanxi, China",
    rating: "4.5",
    image: "/assets/images/testimonials/customer-2.png",
    review:
      "I like it because I like to travel far and still can connect with high speed. This VPN is very good and easy to use.",
  },
  {
    id: 3,
    name: "Kim Young Jou",
    location: "Seoul, South Korea",
    rating: "4.5",
    image: "/assets/images/testimonials/customer-3.png",
    review:
      "This is very unusual for my business that currently requires a virtual private network with high security.",
  },
  {
    id: 4,
    name: "Alex Johnson",
    location: "London, United Kingdom",
    rating: "5.0",
    image: "/assets/images/testimonials/customer-1.png",
    review:
      "The interface is simple, the connection is reliable, and I can use it across my devices without any hassle.",
  },
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToCard = (index) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const card = slider.children[index];
    if (!card) return;

    slider.scrollTo({
      left: card.offsetLeft - slider.offsetLeft,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cards = Array.from(slider.children);
    if (!cards.length) return;

    const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;

    let closestIndex = 0;
    let smallestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter =
        card.offsetLeft - slider.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(sliderCenter - cardCenter);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  };

  const moveSlider = (direction) => {
    const nextIndex = Math.max(
      0,
      Math.min(testimonials.length - 1, activeIndex + direction),
    );

    scrollToCard(nextIndex);
  };

  return (
    <section
      id="testimonials"
      className="overflow-hidden py-16 sm:py-20 lg:py-28 bg-white"
    >
      <Container>
        {/* Heading */}
        <div className="mx-auto max-w-138.75 text-center">
          <h2 className="text-3xl font-medium leading-tight text-heading sm:text-4xl">
            Trusted by Thousands of Happy Customers
          </h2>

          <p className="mt-5 text-sm leading-7 text-body sm:text-base sm:leading-8">
            These are the stories of our customers who have joined us with great
            pleasure when using this amazing feature.
          </p>
        </div>

        {/* Review cards */}
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6 sm:mt-14 sm:gap-6 lg:mt-16 lg:gap-8 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`flex w-[88%] shrink-0 snap-center flex-col rounded-xl border-2 p-5 transition-all duration-300 sm:w-[calc(50%-12px)] sm:p-6 xl:w-[calc(33.333%-22px)] ${
                activeIndex === index
                  ? "border-brand shadow-[0_15px_35px_rgba(13,16,37,0.06)]"
                  : "border-border hover:border-brand/50"
              }`}
            >
              {/* Customer information */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  className="h-12 w-12 shrink-0 rounded-full bg-gray-100 object-cover"
                />

                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-heading sm:text-base">
                    {testimonial.name}
                  </h3>
                  <p className="mt-0.5 text-xs text-body sm:text-sm">
                    {testimonial.location}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-1 text-sm text-heading">
                  <span>{testimonial.rating}</span>
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-4 w-4 text-brand"
                    aria-hidden="true"
                  >
                    <path d="m10 1.5 2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 14.9l-5.25 2.8 1-5.85L1.5 7.7l5.9-.9L10 1.5Z" />
                  </svg>
                </div>
              </div>

              {/* Review */}
              <p className="mt-5 flex-1 text-sm leading-7 text-heading">
                “{testimonial.review}”
              </p>
            </article>
          ))}
        </div>

        {/* Slider navigation */}
        <div className="mt-5 flex items-center justify-between gap-5 sm:mt-7">
          <div className="flex items-center gap-2" aria-label="Choose review">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                type="button"
                onClick={() => scrollToCard(index)}
                aria-label={`Show review ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-brand"
                    : "w-3 bg-[#DDE0E4] hover:bg-brand/50"
                }`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => moveSlider(-1)}
              disabled={activeIndex === 0}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand transition-all duration-200 hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M19 12H5m7 7-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={() => moveSlider(1)}
              disabled={activeIndex === testimonials.length - 1}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-brand text-brand transition-all duration-200 hover:bg-brand hover:text-white disabled:cursor-not-allowed disabled:border-gray-200 disabled:text-gray-300 disabled:hover:bg-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14m-7-7 7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
