import LogoHeader from "../LogoHeader/LogoHeader";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="hero-container">
      <LogoHeader />
      <h1 className="heading--xl">
        Exquisite dining <br /> since 1989
      </h1>
      <p className="text--md--invert">
        Experience our seasonal menu in beautiful country surroundings. Eat the
        freshest produce from the comfort of our farmhouse.
      </p>
      <Button
        page="/reservation"
        variant="btn-light"
        label="book a table"
        type="button"
      />
    </section>
  );
};

export default Hero;
