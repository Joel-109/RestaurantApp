import DishContainer from "./DishContainer";
import OrderList from "./OrderList/OrderList";

export default function DashBoard(){
  
    return (<section className="w-full">
      <OrderList/>
      <DishContainer/>
    </section>);
}