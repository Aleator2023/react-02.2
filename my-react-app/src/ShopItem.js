export const ShopItem = ({name, price, color, img}) => {
    return (
      <div className="shop-item">
        <img src={img} alt={name} />
        <div>
          <h3>{name}</h3>
          <p>{color}</p>
          <p>${price}</p>
        </div>
      </div>
    );
  };
  