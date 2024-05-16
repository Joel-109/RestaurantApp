import { useQuery } from "react-query";
import Dish from "./Dish";
import { getAllDishes } from "../../fetchsource";

interface DishItem {
    id: number;
    name: string;
    price: number;
    description: string;
    quantity: number;
}

export default function DishContainer(){
    /*const {data, isLoading} = useQuery({
        queryKey:['dishes'],
        queryFn: () => getAllDishes()
    });
    */
    const {data, isLoading} = useQuery<DishItem[]>('dishes', getAllDishes);
    if(isLoading){
        return <h1>Is Loading....</h1>
    }

    return (
        <>
            <h1 className="ml-3 font-bold"> Dishes </h1>
            <section className="flex flex-wrap p-5">
                {data?.map((dish)=> 
                <Dish name={dish.name} price={dish.price} description={dish.description} quantity={dish.quantity}></Dish>)}
            </section>
        </>
    );
}