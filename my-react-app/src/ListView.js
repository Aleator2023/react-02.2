import { ShopItem } from './ShopItem.js';

export const ListView = ({items}) => {
    return (
      <div className="list-view">
        {items.map((item, index) => (
          <ShopItem key={index} {...item} />
        ))}
      </div>
    );
  };
  