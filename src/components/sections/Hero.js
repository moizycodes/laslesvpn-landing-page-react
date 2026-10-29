import Container from "../common/Container";

function Hero() {
  return (
    <section
      id="home"
      className="overflow-hidden py-12 sm:py-20 lg:py-28 bg-white"
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-12">
          {/* Hero content */}
          <div className="relative z-10 max-w-xl">
            <h1 className="text-[32px] font-medium leading-[1.3] tracking-tight text-heading sm:text-4xl lg:text-[50px] lg:leading-[1.4]">
              Want anything to be easy with{" "}
              <span className="font-bold">LaslesVPN.</span>
            </h1>

            <p className="mt-5 max-w-lg text-sm leading-7 text-body sm:text-base sm:leading-8">
              Provide a network for all your needs with ease and fun using
              LaslesVPN. Discover interesting features from us.
            </p>

            <a
              href="#pricing"
              className="group relative mt-8 inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-brand px-8 text-base font-bold text-white shadow-[0_18px_35px_rgba(245,56,56,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark hover:shadow-[0_22px_40px_rgba(245,56,56,0.32)] active:translate-y-0 active:scale-[0.98] sm:w-auto sm:min-w-62.5"
            >
              <span className="relative z-10">Get Started</span>

              <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>

          {/* Hero illustration */}
          <div className="relative mx-auto w-full max-w-152.5 md:max-w-none">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-3/4 w-3/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-50/70 blur-3xl"
            />

            <img
              src="/assets/images/hero-illustration.png"
              alt="Person using a laptop with LaslesVPN"
              fetchPriority="high"
              className="h-auto w-full object-contain transition-transform duration-500 ease-out motion-safe:hover:scale-[1.02]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
