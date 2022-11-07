import Hero from "../components/sections/heroes/Hero";
import NavBar from "../components/sections/NavBar";

export default function Home() {
  return (
    <>
      {/* ===== start: NavBar ===== */}
        <NavBar />
      {/* ====== end: NavBar ====== */}

      {/* === start: Hero === */}
        <Hero />
      {/* === end: hero ===== */}

    </>
  )
}
