import { getCart } from "../../fetchsource";
import { useQuery } from "react-query";
import ContactData from "./ContactData";
import {CircularProgress} from "@nextui-org/react";
import { useAuth } from "@clerk/clerk-react";
import DishCard from "./DishCard";

export default function ShoppingCart(){
    const {getToken} = useAuth();

    const {data: CartInfo, isLoading} = useQuery({
        queryKey: ["cart"],
        queryFn: ()=>getToken().then((token) => getCart(token)),
    })


    if(isLoading){
        return (<article className="flex justify-center align-center">
            <CircularProgress color="warning" aria-label="Loading..." />
         </article>);
    }
    
    if (!CartInfo){
        return (
            <article>
                <h1 className="font-bold text-center">No items in the cart</h1>
            </article>
        );
    }

    return(
        <section className="mx-3 ">
            <article className="w-full my-4">
                <h1 className="font-bold  ">Contact Details</h1>
                <ContactData totalPrice={CartInfo.TotalPrice}></ContactData>
            </article>
            <h1 className="font-bold">Order Dishes</h1>
            <section className="flex flex-wrap w-full my-4">
                {CartInfo.Products?.map((dish)=> 
                <DishCard key={dish.ProductId} id={dish.ProductId} ></DishCard>)}
            </section>
        </section>
    );
}