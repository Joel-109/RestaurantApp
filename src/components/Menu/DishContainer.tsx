import { useQuery } from "react-query";
import Dish from "./Dish";
import { getAllDishes } from "../../fetchsource";

interface DishItem {
    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    imageUrl: string;
    category: string;
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
            <section className="flex flex-wrap p-5 justify-center md:justify-start">
                {data?.map((dish)=> 
                <Dish key={dish.id} category={dish.category} name={dish.name} price={dish.price} description={dish.description} imageUrl={dish.imageUrl} quantity={dish.quantity} id={dish.id}></Dish>)}
            </section>
        </>
    );
}
