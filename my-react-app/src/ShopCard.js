export const ShopCard = ({name, price, color, img}) => {
    return (
      <div className="shop-card">
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <p>{color}</p>
        <p>${price}</p>
      </div>
    );
  };
  