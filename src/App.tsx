import React from 'react';
import portfolioData from './content.json';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Credentials } from './components/Credentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Main Application Component
 * 
 * Entire portfolio is 100% data-driven powered by content.json.
 * Updating content.json instantly modifies all copy, metrics, skills,
 * projects, and contact endpoints across the application.
 */
export const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Cosmic background effects */}
      <ParticleBackground />
      <div className="ambient-glow-top" />
      <div className="ambient-glow-side" />

      {/* Navigation Bar */}
      <Navbar
        personalName={portfolioData.personal.name}
        badge={portfolioData.personal.badge}
        domain={portfolioData.meta.domain}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Landing Section */}
        <Hero
          personal={portfolioData.personal}
          stats={portfolioData.stats}
        />

        {/* 2. Architecture & Philosophy Section */}
        <About
          personal={portfolioData.personal}
          highlights={portfolioData.expertiseHighlights}
        />

        {/* 3. Skills & Tools Matrix (Showcasing expertise) */}
        <Skills
          categories={portfolioData.skillsCategories}
        />

        {/* 4. Featured Projects & Distributed Systems */}
        <Projects
          projects={portfolioData.projects}
        />

        {/* 5. Enterprise & Research Experience Timeline */}
        <Experience
          experience={portfolioData.experience}
        />

        {/* 6. Education & Industry Certifications */}
        <Credentials
          education={portfolioData.education}
          certifications={portfolioData.certifications}
        />

        {/* 7. Dedicated Contact Form (Web3Forms) */}
        <Contact
          contactInfo={portfolioData.contact}
          socialLinks={portfolioData.personal.socialLinks}
        />
      </main>

      {/* Footer */}
      <Footer
        footer={portfolioData.footer}
        personalName={portfolioData.personal.name}
      />
    </div>
  );
};

export default App;
