import { useEffect, useState } from "react";

function SignupModal({ isOpen, onClose, onSwitchToSignIn }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setShowPassword(false);
      setShowConfirmPassword(false);
      setErrors({});
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((previous) => ({ ...previous, [name]: "" }));
    setSubmitted(false);
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.password) {
      nextErrors.password = "Please enter a password.";
    } else if (formData.password.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      nextErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      nextErrors.terms = "Please accept the terms to continue.";
    }

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    // Frontend demo only. Connect an authentication service here.
    setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-heading outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/10 ${
      errors[field] ? "border-brand" : "border-gray-200"
    }`;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center overflow-y-auto bg-heading/60 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-modal-title"
        className="relative my-auto w-full max-w-120 animate-[modalEnter_250ms_ease-out] overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_30px_100px_rgba(11,19,42,0.25)]"
      >
        {/* Decorative accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-brand/40 via-brand to-brand/40" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close sign up modal"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 text-body transition hover:bg-red-50 hover:text-brand focus:outline-none focus:ring-4 focus:ring-brand/10"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <path
              d="m6 6 12 12M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="px-5 pb-7 pt-9 sm:px-9 sm:pb-9 sm:pt-10">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-brand">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6"
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
            </span>

            <span className="text-xl tracking-tight text-heading">
              <span className="font-medium">Lasles</span>
              <span className="font-bold">VPN</span>
            </span>
          </div>

          {/* Heading */}
          <div className="mt-6 text-center">
            <h2
              id="signup-modal-title"
              className="text-2xl font-semibold tracking-tight text-heading sm:text-3xl"
            >
              Create your account
            </h2>

            <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-body">
              Join LaslesVPN and enjoy a safer internet experience.
            </p>
          </div>

          {/* Success state */}
          {submitted ? (
            <div
              role="status"
              className="mt-7 rounded-2xl border border-green-200 bg-green-50 p-5 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="m5 12 4 4L19 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <h3 className="mt-3 font-semibold text-heading">
                Form validated successfully!
              </h3>

              <p className="mt-2 text-sm leading-6 text-body">
                This is a frontend demo. Your account has not been created
                because authentication is not connected yet.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="mt-5 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mt-7 space-y-4">
              {/* Full name */}
              <div>
                <label
                  htmlFor="signup-name"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Full name
                </label>

                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "signup-name-error" : undefined
                  }
                  className={inputClass("name")}
                />

                {errors.name && (
                  <p id="signup-name-error" className="mt-1 text-xs text-brand">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="signup-email"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Email address
                </label>

                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email ? "signup-email-error" : undefined
                  }
                  className={inputClass("email")}
                />

                {errors.email && (
                  <p
                    id="signup-email-error"
                    className="mt-1 text-xs text-brand"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="signup-password"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Password
                </label>

                <div className="relative">
                  <input
                    id="signup-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="At least 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={
                      errors.password ? "signup-password-error" : undefined
                    }
                    className={`${inputClass("password")} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((previous) => !previous)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    aria-pressed={showPassword}
                    className="absolute inset-y-0 right-3 flex items-center text-body transition hover:text-brand"
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 3 21 21M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.8 10.8 0 0 1 12 5c5.2 0 8.5 5.1 9.5 7-.4.8-1.3 2.1-2.7 3.3M6.2 6.2C3.8 7.7 2.5 10 2.5 12c1 1.9 4.3 7 9.5 7 1.1 0 2.1-.2 3-.6"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <path
                          d="M2.5 12S5.8 5 12 5s9.5 7 9.5 7-3.3 7-9.5 7-9.5-7-9.5-7Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p
                    id="signup-password-error"
                    className="mt-1 text-xs text-brand"
                  >
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="signup-confirm-password"
                  className="mb-1.5 block text-sm font-medium text-heading"
                >
                  Confirm password
                </label>

                <div className="relative">
                  <input
                    id="signup-confirm-password"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="new-password"
                    placeholder="Re-enter your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.confirmPassword)}
                    aria-describedby={
                      errors.confirmPassword
                        ? "signup-confirm-password-error"
                        : undefined
                    }
                    className={`${inputClass("confirmPassword")} pr-12`}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((previous) => !previous)
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide confirm password"
                        : "Show confirm password"
                    }
                    aria-pressed={showConfirmPassword}
                    className="absolute inset-y-0 right-3 flex items-center text-body transition hover:text-brand"
                  >
                    {showConfirmPassword ? (
                      <span className="text-xs font-medium">Hide</span>
                    ) : (
                      <span className="text-xs font-medium">Show</span>
                    )}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <p
                    id="signup-confirm-password-error"
                    className="mt-1 text-xs text-brand"
                  >
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div>
                <label className="flex cursor-pointer items-start gap-2.5 text-sm leading-5 text-body">
                  <input
                    type="checkbox"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.terms)}
                    className="mt-0.5 h-4 w-4 shrink-0 accent-brand"
                  />

                  <span>
                    I agree to the{" "}
                    <a
                      href="#terms"
                      onClick={onClose}
                      className="font-medium text-brand hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#privacy"
                      onClick={onClose}
                      className="font-medium text-brand hover:underline"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>

                {errors.terms && (
                  <p className="mt-1 text-xs text-brand">{errors.terms}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group relative mt-2 inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-xl bg-brand px-6 py-3 text-sm font-bold text-white shadow-[0_12px_25px_rgba(245,56,56,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_16px_30px_rgba(245,56,56,0.3)] active:translate-y-0"
              >
                <span className="relative z-10">Create Account</span>
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </form>
          )}

          {/* Switch to sign in */}
          {!submitted && (
            <p className="mt-6 text-center text-sm text-body">
              Already have an account?{" "}
              <button
                type="button"
                onClick={onSwitchToSignIn}
                className="font-semibold text-brand transition hover:text-brand-dark hover:underline"
              >
                Sign in
              </button>
            </p>
          )}

          <p className="mt-5 text-center text-xs leading-5 text-muted">
            Your privacy matters. Your information is not sent anywhere in this
            frontend demo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
