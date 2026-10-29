import Container from "../common/Container";

const plans = [
  {
    name: "Free Plan",
    price: "Free",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "No Traffic Logs",
      "Works on All Devices",
    ],
  },
  {
    name: "Standard Plan",
    price: "$9",
    period: "/ mo",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
    ],
  },
  {
    name: "Premium Plan",
    price: "$12",
    period: "/ mo",
    features: [
      "Unlimited Bandwidth",
      "Encrypted Connection",
      "Yes Traffic Logs",
      "Works on All Devices",
      "Connect Anywhere",
      "Get New Features",
    ],
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-20 lg:py-28 bg-[#FBFBFB]">
      <Container>
        <div className="mx-auto max-w-138.75 text-center">
          <h2 className="text-3xl font-medium leading-tight text-heading sm:text-4xl">
            Choose Your Plan
          </h2>

          <p className="mt-5 text-sm leading-7 text-body sm:text-base sm:leading-8">
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:mt-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {plans.map((plan, index) => {
            const isPremium = index === 2;

            return (
              <article
                key={plan.name}
                className={`flex flex-col items-center rounded-2xl border bg-white px-6 py-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(13,16,37,0.08)] sm:px-8 sm:py-10 ${
                  isPremium
                    ? "border-brand shadow-[0_15px_35px_rgba(245,56,56,0.08)]"
                    : "border-border"
                }`}
              >
                <div className="flex h-32 w-32 items-center justify-center text-brand">
                  <svg
                    viewBox="0 0 100 100"
                    fill="none"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 38 50 20 80 38v40H20V38Z"
                      fill="#FFECEC"
                      stroke="#F53838"
                      strokeWidth="2"
                    />
                    <path
                      d="M35 78V53h30v25M43 43h14M50 36v14"
                      stroke="#F53838"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="50" cy="12" r="5" fill="#F53838" />
                  </svg>
                </div>

                <h3 className="mt-6 text-lg font-medium text-heading">
                  {plan.name}
                </h3>

                <ul className="mt-8 w-full flex-1 space-y-4">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-body"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#2FAB73]"
                        aria-hidden="true"
                      >
                        <path
                          d="m4 10 4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 text-center">
                  <p className="text-2xl font-medium text-heading">
                    {plan.price}
                    {plan.period && (
                      <span className="text-base font-normal text-body">
                        {plan.period}
                      </span>
                    )}
                  </p>

                  <a
                    href="#signup"
                    className={`mt-5 inline-flex min-h-12 min-w-40 items-center justify-center rounded-full border-2 px-8 text-sm font-bold transition-all duration-300 active:scale-95 ${
                      isPremium
                        ? "border-brand bg-brand text-white shadow-[0_12px_25px_rgba(245,56,56,0.2)] hover:border-brand-dark hover:bg-brand-dark"
                        : "border-brand text-brand hover:bg-brand hover:text-white"
                    }`}
                  >
                    Select
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Pricing;
