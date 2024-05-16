import Dish from "../Menu/Dish";
import { getAllDishes } from "../../fetchsource";
import { useQuery } from "react-query";
import ContactData from "./ContactData";
import {CircularProgress} from "@nextui-org/react";
interface DishItem {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export default function ShoppingCart(){
    const {data, isLoading} = useQuery<DishItem[]>('dishes', getAllDishes);
    if(isLoading){
        return (<article className="flex justify-center align-center">
            <CircularProgress color="warning" aria-label="Loading..." />
         </article>);
    }   

    console.log(data);

    return(
        <section className="mx-3 ">
            <article className="w-full my-4">
                <h1 className="font-bold  ">Contact Details</h1>
                <ContactData/>
            </article>
            <h1 className="font-bold">Order Dishes</h1>
            <section className="flex flex-wrap w-full my-4">
                {data?.map((dish)=> 
                <Dish name={dish.name} price={dish.price} description={dish.description} quantity={dish.quantity}></Dish>)}
            </section>
        </section>
    );
}