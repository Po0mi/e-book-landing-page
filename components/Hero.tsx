"use client";
import Image from "next/image";
import Book from "@/assets/blank-book.jpg";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper"></div>
      <div className="hero-container">
        <h1 className="hero-title">
          The art of <br />
          minimal living.
        </h1>
        <p className="hero-subtitle">
          A curated guide to reclaiming your mental and physical space through
          intentionality, architectural precision, and the power of less.
        </p>
        <div className="hero-cta">
          <a href="#" className="cta-primary">
            Purchase Edition
          </a>
          <a href="#" className="cta-secondary">
            Read Excerpt
          </a>
        </div>
        <div className="image-wrapper">
          <Image
            src={Book}
            alt="Blank Book"
            fill
            className="hero-image"
            priority
          />
          <div className="manifesto">
            THE FIRST EDITION OF THE ARCHIVAL SERIES
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat1">
            <span className="stat-label">FORMAT</span>
            <span className="stat-value">DIGITAL PDF</span>
          </div>
          <div className="stat2">
            <span className="stat-label">CONTENT</span>
            <span className="stat-value">342 PAGES</span>
          </div>
          <div className="stat3">
            <span className="stat-label">RESOURCES</span>
            <span className="stat-value">15+ ASSETS</span>
          </div>
          <div className="stat4">
            <span className="stat-label">DELIVERY</span>
            <span className="stat-value">INSTANT ACCESS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
