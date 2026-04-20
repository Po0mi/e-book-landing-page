"use client";
import { useFooterAnimation } from "@/hooks/useFooterAnimation";
import "./Footer.scss";

const Footer = () => {
  const containerRef = useFooterAnimation();

  return (
    <footer className="footer" id="footer" ref={containerRef}>
      <div className="footer-top">
        <div className="top-brand">
          <span className="brand-title">The Art of Minimal Living</span>
          <p className="brand-tagline">
            A curated guide to reclaiming your mental and physical space.
          </p>
        </div>

        <nav className="top-nav">
          <div className="nav-col">
            <span className="nav-heading">Navigate</span>
            <a href="#hero">Home</a>
            <a href="#chapters">Chapters</a>
            <a href="#testimonials">Readers</a>
            <a href="#pricing">Pricing</a>
            <a href="#inquiry">FAQ</a>
          </div>
          <div className="nav-col">
            <span className="nav-heading">Support</span>
            <a href="#">Contact</a>
            <a href="#">Refunds</a>
            <a href="#">Licensing</a>
          </div>
          <div className="nav-col">
            <span className="nav-heading">Follow</span>
            <a href="#">Instagram</a>
            <a href="#">Twitter / X</a>
            <a href="#">Substack</a>
          </div>
        </nav>
      </div>

      <div className="footer-wordmark">
        <span>Minimal</span>
      </div>

      <div className="footer-bottom">
        <span className="bottom-copy">
          © {new Date().getFullYear()} The Art of Minimal Living. All rights
          reserved.
        </span>
        <div className="bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
