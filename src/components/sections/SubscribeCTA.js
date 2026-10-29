import Container from "../common/Container";

function SubscribeCTA() {
  return (
    <section className="relative z-10 bg-transparent pt-8">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 rounded-2xl bg-white px-6 py-8 shadow-[0_20px_60px_rgba(13,16,37,0.10)] sm:px-10 sm:py-10 lg:flex-row lg:gap-12 lg:px-16 lg:py-14">
          {/* CTA content */}
          <div className="max-w-102.5 text-center lg:text-left">
            <h2 className="text-2xl font-medium leading-tight text-heading sm:text-3xl">
              Subscribe Now for Get Special Features!
            </h2>

            <p className="mt-4 text-sm leading-7 text-body sm:text-base">
              Let's subscribe with us and find the fun.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="#pricing"
            className="group relative inline-flex min-h-14 w-full items-center justify-center overflow-hidden rounded-xl bg-brand px-8 text-base font-bold text-white shadow-[0_18px_35px_rgba(245,56,56,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-dark hover:shadow-[0_22px_40px_rgba(245,56,56,0.32)] active:translate-y-0 active:scale-[0.98] sm:w-auto sm:min-w-62.5"
          >
            <span className="relative z-10">Subscribe Now</span>

            <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default SubscribeCTA;
