import Button from "../components/Button/Button";
import LogoHeader from "../components/LogoHeader/LogoHeader";

import Footer from "../components/Footer/Footer";

const Homepage = () => {
  return (
    <main>
      <LogoHeader />
      <h2>Homepage</h2>
      <Button
        page="/reservation"
        variant="btn-dark"
        label="reservation"
        type="button"
      />
      <Footer />
    </main>
  );
};

export default Homepage;
