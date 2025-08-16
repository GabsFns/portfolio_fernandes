"use client"; // Se você estiver usando Next.js App Router
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

import Header from "../../header/header";
import WelcomeCard from "../../cards/welcome_card";
import CardCarousel from "../../cards/cardCarousel";
import AboutComponent from "../../about/aboutComponent";
import Works from "../../works/works";
import ProjectComponent from "../../project/projectComponent";
import ContactComponent from "../../contact/contactComponent";
import FooterComp from "../../footer/footer";

export default function DefaultLayout() {
  // Variantes de animação para reuso
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Função para criar refs e visibilidade
  const useAnimatedSection = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    return [ref, isInView] as const;
  };

  const [welcomeRef, welcomeInView] = useAnimatedSection();
  const [carouselRef, carouselInView] = useAnimatedSection();
  const [aboutRef, aboutInView] = useAnimatedSection();
  const [worksRef, worksInView] = useAnimatedSection();
  const [projectRef, projectInView] = useAnimatedSection();
  const [contactRef, contactInView] = useAnimatedSection();
  const [footerRef, footerInView] = useAnimatedSection();

  return (
    <div className="default-layout">
      <Header />

      <motion.div
        ref={welcomeRef}
        variants={fadeUp}
        initial="hidden"
        animate={welcomeInView ? "visible" : "hidden"}
      >
        <WelcomeCard />
      </motion.div>

      <motion.div
        ref={carouselRef}
        variants={fadeUp}
        initial="hidden"
        animate={carouselInView ? "visible" : "hidden"}
      >
        <CardCarousel />
      </motion.div>

      <motion.div
        ref={aboutRef}
        variants={fadeUp}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
      >
        <AboutComponent />
      </motion.div>

      <motion.div
        ref={worksRef}
        variants={fadeUp}
        initial="hidden"
        animate={worksInView ? "visible" : "hidden"}
      >
        <Works />
      </motion.div>

      <motion.div
        ref={projectRef}
        variants={fadeUp}
        initial="hidden"
        animate={projectInView ? "visible" : "hidden"}
      >
        <ProjectComponent />
      </motion.div>

      <motion.div
        ref={contactRef}
        variants={fadeUp}
        initial="hidden"
        animate={contactInView ? "visible" : "hidden"}
      >
        <ContactComponent />
      </motion.div>

      <motion.div
        ref={footerRef}
        variants={fadeUp}
        initial="hidden"
        animate={footerInView ? "visible" : "hidden"}
      >
        <FooterComp />
      </motion.div>

      <main></main>
    </div>
  );
}
