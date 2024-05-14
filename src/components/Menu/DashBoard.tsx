import Dish from "./Dish";
import OrderList from "./OrderList/OrderList";

export default function DashBoard(){
  
    return (<section className="w-full flex">
      <OrderList/>
      <Dish name="hamburguer" price={99.3} description="lorem insum dolor" quantity={2}></Dish>
      <Dish name="hamburguer" price={99.3} description="lorem insum dolor" quantity={2}></Dish>
    </section>);
}