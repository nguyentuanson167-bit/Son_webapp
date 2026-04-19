import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import ValueProposition from "@/components/ValueProposition";
import SolutionCards from "@/components/SolutionCards";
import ProcessSteps from "@/components/ProcessSteps";
import ExpertMetrics from "@/components/ExpertMetrics";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <ValueProposition />
        <SolutionCards />
        <ProcessSteps />
        <ExpertMetrics />
        <FAQ />
        <ContactForm />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
