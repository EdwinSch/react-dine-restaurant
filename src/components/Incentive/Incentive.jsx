import Button from "../Button/Button";

const Incentive = () => {
  return (
    <section className="incentive-container">
      <h4 className="heading--lg--invert">Ready to make a reservation?</h4>
      <Button
        page="/reservation"
        variant="btn-light"
        label="book a table"
        type="button"
      />
    </section>
  );
};

export default Incentive;
