import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Location from "./components/Location";
import Amenities from "./components/Amenities";
import Gallery from "./components/Gallery";
import MasterPlan from "./components/MasterPlan";
import UnitPlan from "./components/UnitPlan";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function Home() {
  return (
    <>
      {/* ================= HEADER ================= */}

      <Header />

      {/* ================= MAIN ================= */}

      <main>
        {/* ================= HERO ================= */}

        <Hero />

        {/* ================= ABOUT PROJECT ================= */}

        <About />

        {/* ================= LOCATION ================= */}

        <Location />

        {/* ================= AMENITIES ================= */}

        <Amenities />

        {/* ================= GALLERY ================= */}

        <Gallery />

        {/* ================= MASTER PLAN ================= */}

        <MasterPlan />

        {/* ================= UNIT PLAN ================= */}

        <UnitPlan />

        {/* ================= CONTACT ================= */}

        <Contact />
      </main>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= FLOATING BUTTONS ================= */}

      <FloatingButtons />
    </>
  );
}