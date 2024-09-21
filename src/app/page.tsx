import { BeamHero } from "@/components/BeamHero";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Products } from "@/components/Products";
import HeroHeading from "@/components/HeroHeading";

export default function Home() {
  return (
    <Container>
      <section className="h-screen"><BeamHero/></section>
      <section className="mt-2"><HeroHeading/></section>
      <section><Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Our Services
      </Heading>
      <Products />
      </section>
          
      
      
    </Container>
  );
}
