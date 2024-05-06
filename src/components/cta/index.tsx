import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's work together.
      </p>
      <Link to="/contact" className="cta-btn">
        Contact Me
      </Link>
    </section>
  );
};
