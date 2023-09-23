import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo" className="logo-img" />
      <section className="info-container">
        <article className="contact">
          marthwaite, sedbergh <br />
          cumbria <br />
          +00 44 123 4567
        </article>
        <article className="contact">
          open times <br />
          mon - fri: 09:00 am - 10:00 pm <br />
          sat - sun: 09:00 am - 11:30 pm
        </article>
      </section>
    </footer>
  );
};

export default Footer;
