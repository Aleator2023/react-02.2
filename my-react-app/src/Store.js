import React, { useState } from 'react';
import { CardsView } from './CardsView.js';
import { ListView } from './ListView.js';
import { IconSwitch } from './IconSwitch';


export const Store = () => {
  const [viewMode, setViewMode] = useState('cards'); // 'cards' или 'list'
  
  const switchView = () => {
    setViewMode(viewMode === 'cards' ? 'list' : 'cards');
  };
  
  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  return (
    <div>
      <IconSwitch
        icon={viewMode === 'cards' ? 'view_list' : 'view_module'}
        onSwitch={switchView}
      />
      {viewMode === 'cards' ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  );
};
