import React, { useEffect } from 'react';

const Items = ({ FoodItems, setFoodItems, orders, setOrders }) => {

  useEffect(() => {
    // Set the food items as an array inside useEffect
    setFoodItems([
      "Naruto",
      "One Piece",
      "Dragon Ball",
      "Demon Slayer",
      "Idaten Jump",
      "Attack on Titan"
    ]);
  }, [setFoodItems]);

  function Add(index) {
    const selectedItem = FoodItems[index];

    // Check if the item already exists in the orders array
    const isItemInOrders = orders.some(order => order === selectedItem);

    if (!isItemInOrders) {
      setOrders(prevOrders => [...prevOrders, selectedItem]);
    } else {
      console.log(`${selectedItem} is already in the orders array`);
    }
  }

  return (
    <div className="Main-ItemBtn">
      {FoodItems.map((i, index) => (
        <div key={index} className="ItemBtn" onClick={() => Add(index)}>
          {i}
        </div>
      ))}
    </div>
  );
};

export default Items;
