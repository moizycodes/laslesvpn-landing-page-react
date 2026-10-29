import { useEffect, useState } from "react";

function SignInModal({ isOpen, onClose, onSwitchToSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setPassword("");
      setError("");
      setSubmitted(false);
      setShowPassword(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    // Frontend demo only. Authentication is not connected.
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-heading/60 p-4 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signin-modal-title"
        className="relative my-auto w-full max-w-110 animate-[modalEnter_250ms_ease-out] rounded-3xl border border-white/70 bg-white p-6 shadow-[0_30px_100px_rgba(11,19,42,0.25)] sm:p-9"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sign in modal"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-xl text-body hover:bg-red-50 hover:text-brand"
        >
          ×
        </button>

        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-brand">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7"
              aria-hidden="true"
            >
              <path
                d="M12 3 20 7.5v9L12 21l-8-4.5v-9L12 3Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="m8.5 12 2.2 2.2 4.8-5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2
            id="signin-modal-title"
            className="mt-5 text-2xl font-semibold tracking-tight text-heading sm:text-3xl"
          >
            Welcome back
          </h2>

          <p className="mt-2 text-sm leading-6 text-body">
            Sign in to your LaslesVPN account.
          </p>
        </div>

        {submitted ? (
          <div
            role="status"
            className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5 text-center"
          >
            <h3 className="font-semibold text-heading">
              Form validated successfully!
            </h3>
            <p className="mt-2 text-sm leading-6 text-body">
              This is a frontend demo. Sign in is not available until an
              authentication service is connected.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-5 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-5">
            <div>
              <label
                htmlFor="signin-email"
                className="mb-1.5 block text-sm font-medium text-heading"
              >
                Email address
              </label>
              <input
                id="signin-email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-heading outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10"
              />
            </div>

            <div>
              <div className="mb-1.5 flex items-center justify-between gap-3">
                <label
                  htmlFor="signin-password"
                  className="block text-sm font-medium text-heading"
                >
                  Password
                </label>
                <button
                  type="button"
                  onClick={() =>
                    setError("Password reset is not connected yet.")
                  }
                  className="text-xs font-medium text-brand hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-16 text-sm text-heading outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  className="absolute inset-y-0 right-3 text-xs font-medium text-body hover:text-brand"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {error && (
              <p role="alert" className="text-sm text-brand">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="min-h-12 w-full rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(245,56,56,0.22)] transition hover:-translate-y-0.5 hover:bg-brand-dark"
            >
              Sign In
            </button>
          </form>
        )}

        {!submitted && (
          <p className="mt-6 text-center text-sm text-body">
            Don&apos;t have an account?{" "}
            <button
              type="button"
              onClick={onSwitchToSignUp}
              className="font-semibold text-brand hover:text-brand-dark hover:underline"
            >
              Sign up
            </button>
          </p>
        )}

        <p className="mt-5 text-center text-xs leading-5 text-muted">
          Your information is not sent anywhere in this frontend demo.
        </p>
      </div>
    </div>
  );
}

export default SignInModal;
