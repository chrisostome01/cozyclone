import Client from "../components/sections/Client";
import GetCozy from "../components/sections/GetCozy";
import Hero from "../components/sections/heroes/Hero";
import NavBar from "../components/sections/NavBar";
import Circle from "../components/ui/Circle";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <>
      {/* ===== start: NavBar section ====== */}
        <NavBar />
      {/* ====== end: NavBar section  ====== */}

      {/* ====== start: Hero section ======= */}
        <Hero />
      {/* ====== end: hero section ========= */}

      {/* ====== start: GetCozy section  === */}
        <GetCozy />
      {/* ====== end: GetCozy section  ===== */}
      
      {/* ====== start: Circle  section ==== */}
        <Circle />
      {/* ====== end: Circle section  ====== */}
      
      {/* ====== start: Client  section ==== */}
        <Client />
      {/* ====== end: Client  section ==== */}
      
      {/* ====== start: Footer  section ==== */}
        <Footer />
      {/* ====== end: Footer section  ====== */}

    </>
  )
}
