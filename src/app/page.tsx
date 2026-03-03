"use client";

import { useRef } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import SocialLinksSection from "@/components/SocialLinksSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function Home() {
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      <NavBar />
      <HeroSection />
      <SocialLinksSection />
      <ProjectsSection sectionRef={projectsRef} />
      <AboutSection />
      <ContactForm />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
