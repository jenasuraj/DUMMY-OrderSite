import {React,useState} from 'react';
import Heading from './FrontEnd/Components/Heading';
import Items from './FrontEnd/Components/Items';
import '../src/index.css'; // Don't forget to import your CSS file here
import Orders from './FrontEnd/Components/Orders';
import SendData from './FrontEnd/Components/SendData';


function App() {
  const [FoodItems,setFoodItems] = useState([]);
  const [orders,setOrders] = useState([]);
  return (
    <>
      <Heading />
      <Items FoodItems={FoodItems}  setFoodItems={setFoodItems}
      orders={orders} setOrders ={setOrders}
      />
      <Orders 
      orders={orders} />
      <SendData orders={orders} />
    </>
  );
}

export default App;
