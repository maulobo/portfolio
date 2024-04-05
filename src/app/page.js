import Hero from "./components/hero/hero";
import Selected from "./components/selected/selected";
import What from "./components/what/what";

export default function Home() {
  return (
    <main>
      <svg className="pointer-events-none absolute cursor-none">
        <filter id="grainy">
          <feTurbulence type="turbulence" baseFrequency=".5"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix>
        </filter>
      </svg>
      <Hero />
      <What />
      <Selected />
    </main>
  );
}
