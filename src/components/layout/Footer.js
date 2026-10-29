import Container from "../common/Container";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Download", href: "#download" },
      { label: "Pricing", href: "#pricing" },
      { label: "Locations", href: "#network" },
      { label: "Server", href: "#network" },
      { label: "Countries", href: "#network" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Engage",
    links: [
      { label: "LaslesVPN ?", href: "#about" },
      { label: "FAQ", href: "#faq" },
      { label: "Tutorials", href: "#tutorials" },
      { label: "About Us", href: "#about" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
  {
    title: "Earn Money",
    links: [
      { label: "Affiliate", href: "#affiliate" },
      { label: "Become Partner", href: "#partner" },
    ],
  },
];

function Footer() {
  return (
    <footer
      id="footer"
      className="relative -mt-10 pt-20 pb-10 sm:-mt-12 sm:pt-24 lg:-mt-16 lg:pt-36 bg-surface"
    >
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:gap-10">
          {/* Brand and social links */}
          <div className="max-w-85">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5"
              aria-label="LaslesVPN home"
            >
              {/* Logo icon */}
              <svg
                width="35"
                height="37"
                viewBox="0 0 35 37"
                fill="none"
                aria-hidden="true"
                className="h-9 w-9 shrink-0"
              >
                <path
                  d="M17.5 2.5C9.22 2.5 2.5 9.22 2.5 17.5S9.22 32.5 17.5 32.5 32.5 25.78 32.5 17.5 25.78 2.5 17.5 2.5Zm0 5.5a9.5 9.5 0 1 1 0 19 9.5 9.5 0 0 1 0-19Z"
                  fill="#F53838"
                />
              </svg>

              <span className="text-xl tracking-tight text-heading">
                <span className="font-medium">Lasles</span>
                <span className="font-bold">VPN</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-7 text-body">
              <span className="font-medium text-heading">LaslesVPN</span> is a
              private virtual network that has unique features and has high
              security.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.facebook.com/moizycodes"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-[0_8px_18px_rgba(13,16,37,0.10)] transition-all duration-200 hover:-translate-y-1 hover:bg-brand hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M13.5 21v-8.2h2.8l.4-3.2h-3.2V7.5c0-.9.3-1.5 1.6-1.5h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V21h3.4Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/moizycodes"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-[0_8px_18px_rgba(13,16,37,0.10)] transition-all duration-200 hover:-translate-y-1 hover:bg-brand hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-7.2L5.7 22H2.5l7.3-8.4L1.8 2h6.5l4.4 6.6L18.9 2Zm-1.1 18h1.7L7.3 3.9H5.5L17.8 20Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/moizycodes"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-[0_8px_18px_rgba(13,16,37,0.10)] transition-all duration-200 hover:-translate-y-1 hover:bg-brand hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>
            </div>

            <p className="mt-6 text-sm text-muted">
              © {new Date().getFullYear()} LaslesVPN. Built by moizycodes. All
              rights reserved.
            </p>
          </div>

          {/* Footer link groups */}
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-base font-medium text-heading">
                {group.title}
              </h3>

              <ul className="mt-5 space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-body transition-colors duration-200 hover:text-brand"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
