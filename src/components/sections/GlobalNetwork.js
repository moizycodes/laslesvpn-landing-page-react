import Container from "../common/Container";

const partners = [
  {
    name: "Netflix",
    src: "/assets/images/partners/netflix.png",
    className: "max-w-[150px] max-h-12",
  },
  {
    name: "Reddit",
    src: "/assets/images/partners/reddit.png",
    className: "max-w-[150px] max-h-12",
  },
  {
    name: "Amazon",
    src: "/assets/images/partners/amazon.png",
    className: "max-w-[100px] max-h-12",
  },
  {
    name: "Discord",
    src: "/assets/images/partners/discord.png",
    className: "max-w-[150px] max-h-12",
  },
  {
    name: "Spotify",
    src: "/assets/images/partners/spotify.png",
    className: "max-w-[150px] max-h-12",
  },
];

function GlobalNetwork() {
  return (
    <section
      id="network"
      className="overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-138.75 text-center">
          <h2 className="text-3xl font-medium leading-tight text-heading sm:text-4xl">
            Huge Global Network of Fast VPN
          </h2>

          <p className="mt-5 text-sm leading-7 text-body sm:text-base sm:leading-8">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
        </div>

        {/* World map illustration */}
        <div className="mx-auto mt-12 w-full max-w-265 sm:mt-16 lg:mt-20">
          <img
            src="/assets/images/global-network-map.png"
            alt="Global map showing the LaslesVPN network"
            loading="lazy"
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Partner company logo images */}
        <div
          className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-8 sm:mt-14 sm:grid-cols-3 lg:mt-16 lg:grid-cols-5 lg:gap-x-10"
          aria-label="Partner companies"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-16 w-full items-center justify-center px-3"
            >
              <img
                src={partner.src}
                alt={`${partner.name} logo`}
                loading="lazy"
                className={`h-auto w-full object-contain opacity-70 grayscale transition-all duration-300 hover:scale-110 hover:opacity-100 hover:grayscale-0 ${partner.className}`}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default GlobalNetwork;
