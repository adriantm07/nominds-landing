import Header      from "@/components/Header";
import Hero        from "@/components/Hero";
import Problem     from "@/components/Problem";
import Features    from "@/components/Features";
import UseCases    from "@/components/UseCases";
import Benefits    from "@/components/Benefits";
import WhyNominds  from "@/components/WhyNominds";
import FinalCTA    from "@/components/FinalCTA";
import Footer      from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <div style={{ height: 1, background: "#E6E8E3" }} />
      <Problem />
      <Features />
      <div style={{ height: 1, background: "#E6E8E3" }} />
      <UseCases />
      <div style={{ height: 1, background: "#E6E8E3" }} />
      <Benefits />
      <div style={{ height: 1, background: "#E6E8E3" }} />
      <WhyNominds />
      <FinalCTA />
      <Footer />
    </main>
  );
}
