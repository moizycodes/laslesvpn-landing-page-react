import { useCallback, useEffect, useRef, useState } from "react";
import Container from "../common/Container";
import SignupModal from "../common/SignupModal";
import SignInModal from "../common/SignInModal";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Help", href: "#footer" },
];

function Header() {
  // Signup modal state
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const openSignup = useCallback(() => {
    setIsMenuOpen(false);
    setIsSignupOpen(true);
  }, []);

  const closeSignup = useCallback(() => {
    setIsSignupOpen(false);
  }, []);

  //   Sign In modal state
  const [isSignInOpen, setIsSignInOpen] = useState(false);

  const openSignIn = () => {
    setIsMenuOpen(false);
    setIsSignupOpen(false);
    setIsSignInOpen(true);
  };

  const closeSignIn = () => setIsSignInOpen(false);

  const openSignupFromSignIn = () => {
    setIsSignInOpen(false);
    setIsSignupOpen(true);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const headerRef = useRef(null);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleOutsideClick = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, []);

  const handleNavigation = (href) => {
    setActiveLink(href);
    closeMenu();
  };

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-gray-100/80 bg-white/95 backdrop-blur-xl"
      >
        <Container>
          <nav
            aria-label="Main navigation"
            className="flex min-h-19 items-center justify-between gap-5"
          >
            {/* Brand */}
            <a
              href="#home"
              onClick={() => handleNavigation("#home")}
              aria-label="LaslesVPN home"
              className="group flex shrink-0 items-center gap-2.5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <svg
                  width="35"
                  height="37"
                  viewBox="0 0 35 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="h-full w-full"
                >
                  <path
                    d="M31.1473 13.6477L31.1255 13.626C31.1238 13.6247 31.1224 13.6231 31.1215 13.6212L17.5006 0L3.87983 13.6209C3.87826 13.6225 3.8758 13.6256 3.8758 13.6256L3.85333 13.6474C1.77053 15.7419 0.447586 18.4725 0.0948177 21.4052C-0.25795 24.3379 0.379698 27.3044 1.90639 29.8331C3.43309 32.3619 5.76122 34.3077 8.52069 35.3612C11.2802 36.4147 14.3126 36.5157 17.136 35.6477C17.3735 35.5751 17.6275 35.5751 17.8651 35.6477C20.6882 36.5153 23.7205 36.4144 26.4798 35.3607C29.2391 34.307 31.567 32.3613 33.0936 29.8328C34.6202 27.3042 35.2579 24.3379 34.9053 21.4054C34.5526 18.4728 33.2299 15.7422 31.1473 13.6477ZM8.7232 22.6298C8.65689 22.6961 8.6043 22.7749 8.56844 22.8615C8.53257 22.948 8.5141 23.0408 8.51412 23.1346C8.53835 25.5386 9.21776 27.8904 10.4792 29.9371C10.5079 29.9835 10.5211 30.0379 10.517 30.0922C10.513 30.1465 10.4918 30.1982 10.4566 30.2399C10.4213 30.2816 10.3738 30.311 10.3209 30.324C10.2679 30.337 10.2122 30.333 10.1616 30.3124C9.21332 29.9135 8.35182 29.3336 7.62531 28.6053C6.13646 27.1162 5.29946 25.097 5.2981 22.9912C5.29675 20.8855 6.13117 18.8652 7.61812 17.3743L17.5006 7.49273L27.3826 17.3743C28.8698 18.865 29.7045 20.8853 29.703 22.9912C29.7018 25.097 28.8647 27.1162 27.3757 28.6053C26.6492 29.3336 25.7877 29.9135 24.8396 30.3124C24.7889 30.333 24.7332 30.337 24.6802 30.324C24.6273 30.311 24.5798 30.2814 24.5445 30.2399C24.5093 30.1982 24.488 30.1465 24.484 30.092C24.4799 30.0377 24.4931 29.9833 24.5218 29.9369C25.7835 27.8904 26.4633 25.5386 26.4879 23.1346C26.4879 23.0408 26.4692 22.948 26.4332 22.8613C26.3971 22.7746 26.3444 22.696 26.2779 22.6296L21.6037 17.6717C21.5571 17.6329 21.4985 17.6116 21.4378 17.6116C21.3773 17.6116 21.3186 17.6329 21.2721 17.6717C21.2255 17.7104 21.1942 17.7644 21.1833 17.824C21.1724 17.8837 21.1828 17.945 21.2127 17.9978C23.0281 21.283 21.467 26.0017 18.8637 28.6053L18.85 28.6191C18.4907 28.9745 18.0056 29.1738 17.5002 29.1736C16.9948 29.1734 16.5098 28.9738 16.1508 28.6182L16.1382 28.6053C13.5339 26.0017 11.9736 21.2835 13.7893 17.9985C13.8192 17.9457 13.8296 17.8844 13.8187 17.8247C13.8079 17.7651 13.7764 17.7111 13.7299 17.6724C13.6834 17.6336 13.6247 17.6123 13.5642 17.6123C13.5036 17.6123 13.4449 17.6336 13.3984 17.6724L8.7232 22.6298Z"
                    fill="#F53838"
                  />
                </svg>
              </span>

              <span className="whitespace-nowrap text-[19px] tracking-tight text-heading">
                <span className="font-medium">Lasles</span>
                <span className="font-bold">VPN</span>
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-5 md:flex lg:gap-7 xl:gap-9">
              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className={`group relative whitespace-nowrap py-2 text-[13px] transition-colors duration-300 lg:text-sm ${
                    activeLink === link.href
                      ? "font-medium text-brand"
                      : "text-body hover:text-brand"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-brand transition-all duration-300 ease-out ${
                      activeLink === link.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              ))}
            </div>

            {/* Desktop actions */}
            <div className="hidden shrink-0 items-center gap-4 md:flex lg:gap-6">
              <button
                type="button"
                onClick={openSignIn}
                className="text-sm font-medium text-heading transition hover:text-brand"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={openSignup}
                className="rounded-full border-2 border-brand px-9 py-2.5 text-sm font-medium text-brand transition-all duration-300 hover:bg-brand hover:text-white"
              >
                Sign Up
              </button>
            </div>

            {/* Animated mobile menu button */}
            <button
              type="button"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white transition-all duration-300 hover:border-brand/40 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
            >
              <span className="relative flex h-4 w-5 flex-col items-center justify-between">
                <span
                  className={`h-0.5 w-5 origin-center rounded-full bg-heading transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "translate-y-1.75 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-5 rounded-full bg-heading transition-all duration-200 ${
                    isMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100"
                  }`}
                />

                <span
                  className={`h-0.5 w-5 origin-center rounded-full bg-heading transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "-translate-y-1.75 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </nav>

          {/* Modern mobile navigation */}
          <div
            id="mobile-navigation"
            aria-hidden={!isMenuOpen}
            inert={!isMenuOpen}
            className={`absolute left-3 right-3 top-[calc(100%+8px)] overflow-hidden rounded-2xl border border-gray-100/80 bg-white/95 shadow-[0_20px_60px_rgba(11,19,42,0.12)] backdrop-blur-xl transition-[max-height,opacity,visibility,transform] duration-300 ease-out motion-reduce:transition-none md:hidden ${
              isMenuOpen
                ? "visible max-h-115 translate-y-0 opacity-100"
                : "invisible max-h-0 -translate-y-2 opacity-0"
            }`}
          >
            {/* Subtle brand accent */}
            <div className="h-0.5 bg-linear-to-r from-transparent via-brand/70 to-transparent" />

            <div className="p-3 sm:p-4">
              {/* Navigation links */}
              <div className="flex flex-col gap-1">
                {navigationLinks.map((link, index) => {
                  const isActive = activeLink === link.href;

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => handleNavigation(link.href)}
                      style={{
                        transitionDelay: isMenuOpen ? `${index * 35}ms` : "0ms",
                      }}
                      className={`group flex min-h-12 items-center justify-between rounded-xl px-4 text-sm transition-all duration-200 ${
                        isActive
                          ? "bg-red-50 font-medium text-brand"
                          : "text-body hover:bg-gray-50 hover:text-brand"
                      }`}
                    >
                      <span>{link.label}</span>

                      <svg
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className={`h-4 w-4 transition-all duration-200 ${
                          isActive
                            ? "translate-x-0 text-brand opacity-100"
                            : "-translate-x-1 text-gray-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                        }`}
                      >
                        <path
                          d="M4 10h12m-5-5 5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  );
                })}
              </div>

              {/* Authentication actions */}
              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-gray-100 pt-4">
                <button
                  type="button"
                  onClick={openSignIn}
                  className="text-sm font-medium text-heading transition hover:text-brand"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  onClick={openSignup}
                  className="inline-flex min-h-11 items-center justify-center rounded-xl bg-brand px-5 text-sm font-semibold text-white transition hover:bg-brand-dark"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </Container>
      </header>

      <SignupModal
        isOpen={isSignupOpen}
        onClose={closeSignup}
        onSwitchToSignIn={openSignIn}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={closeSignIn}
        onSwitchToSignUp={openSignupFromSignIn}
      />
    </>
  );
}

export default Header;
