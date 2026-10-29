import Container from "../common/Container";

const features = [
  "Powerful online protection.",
  "Internet without borders.",
  "Supercharged VPN",
  "No specific time limits.",
];

function Features() {
  return (
    <section
      id="features"
      className="overflow-hidden py-16 sm:py-20 lg:py-28 bg-white"
    >
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* Left: Illustration */}
          <div className="mx-auto w-full max-w-130">
            <img
              src="/assets/images/features-illustration.png"
              alt="Illustration showing secure internet access with LaslesVPN"
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="mx-auto w-full max-w-107.5">
            <h2 className="text-3xl font-medium leading-tight text-heading sm:text-4xl lg:text-[35px] lg:leading-[1.4]">
              We Provide Many Features You Can Use
            </h2>

            <p className="mt-5 text-sm leading-7 text-body sm:text-base sm:leading-8">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>

            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm text-body sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2FAB73]/10 text-[#2FAB73]">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        d="m5 10 3.2 3.2L15 6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>

                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Features;
