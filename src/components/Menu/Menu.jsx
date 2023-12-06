import { menuData } from "../../data";
import divide from "../../assets/patterns/pattern-divide.svg";

const Menu = () => {
  return (
    <section className="menu-container">
      <div className="text-wrapper">
        <figure className="pattern-wrapper">
          <img src={divide} alt="divider-pattern" className="divider-pattern" />
        </figure>
        <h4 className="heading--lg--invert">A few highlights from our menu</h4>
        <p className="text--md--invert">
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favourites. Our menu is revamped every season.
        </p>
      </div>
      <div className="menu-items-wrapper">
        {/* single menu items */}
        {menuData.map((item) => {
          return (
            <article className="menu-item" key={item.id}>
              <hr />
              <img src={item.img} alt="food item" className="food-img" />
              <div className="menu-item-info-col">
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
