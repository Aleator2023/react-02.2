import { ShopCard } from './ShopCard.js';

export const CardsView = ({cards}) => {
  return (
    <div className="cards-view">
      {cards.map((card, index) => (
        <ShopCard key={index} {...card} />
      ))}
    </div>
  );
};
