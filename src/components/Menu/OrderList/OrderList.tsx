import { useQuery } from "react-query";
import OrderCard from "./OrderCard";
import { getOrders } from "../../../fetchsource";
import { useAuth } from "@clerk/clerk-react";
import {CircularProgress} from "@nextui-org/react";

function OrderList(){
    const {getToken} = useAuth();

    const {data: orders, isLoading} = useQuery({
        queryKey: "orders",
        queryFn: () => getToken().then((token) => getOrders(token)),
    });

    if(isLoading){
        return (<article className="flex justify-center align-center">
            <CircularProgress color="warning" aria-label="Loading..." />
        </article>);
    }

    return(
        <section className="flex flex-col gap-4 ml-2.5 pb-2 overflow-x-auto scrollbar-hide mt-2">
            <h1 className="mt-4 font-bold text-lg"> OrderList </h1>
            <section className="flex gap-8">
                {orders?.map((order)=><OrderCard key={order.OrderId} products={order.Products} id={order.OrderId} date={order.Date} deliveryAddress={order.DeliveryAdress} status={order.Status}/>)}
            </section>
        </section> 
    );
}

export default OrderList;