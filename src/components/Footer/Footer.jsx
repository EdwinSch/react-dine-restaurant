import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" className="logo-img" />
      <section className="info-container">
        <article className="contact">
          <p>marthwaite, sedbergh</p>
          <p>cumbria</p>
          <p>+00 44 123 4567</p>
        </article>
        <article className="contact">
          <p>open times</p>
          <p>mon - fri: 09:00 am - 10:00 pm</p>
          <p>sat - sun: 09:00 am - 11:30 pm</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
