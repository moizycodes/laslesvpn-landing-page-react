import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import Statistics from "./components/sections/Statistics";
import Features from "./components/sections/Features";
import Pricing from "./components/sections/Pricing";
import GlobalNetwork from "./components/sections/GlobalNetwork";
import Testimonials from "./components/sections/Testimonials";
import SubscribeCTA from "./components/sections/SubscribeCTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Header />

      <main id="home" className="min-h-screen">
        <Hero />
        <Statistics />
        <Features />
        <Pricing />
        <GlobalNetwork />
        <Testimonials />
        <SubscribeCTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
