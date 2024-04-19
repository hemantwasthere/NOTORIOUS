import Bottom from "@/components/Bottom";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Strap from "@/components/Strap";
import Works from "@/components/Works";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Works />
      <Strap />
      <Bottom />
      <FAQ />
      <Footer />
    </main>
  );
}
