import { useAuth } from "@clerk/clerk-react";
import { useQuery } from "react-query";
import { getDishInfo } from "../../../fetchsource";
import {CircularProgress} from "@nextui-org/react";

interface Props {
    mealId: string;
    quantity: number;
}

export default function MealOrder(props: Props) {

    const { getToken } = useAuth();

    const { data: dishInfo, isLoading: dishLoading } = useQuery({
        queryKey: ["dishInfo" + props.mealId],
        queryFn: () => getToken().then(() => getDishInfo(props.mealId)),
    });
    
    if (dishLoading) return (
        <article className="flex justify-center align-center">
            <CircularProgress color="warning" aria-label="Loading..." />
        </article>);
        
    if (!dishInfo) return <article>Meal not found</article>; 
    
    console.log("This is he quantity in the meal order")
    console.log(props.quantity)
    
    return (
        <section className="bg-blue-600 rounded text-white font-bold p-2">
            <h1>{dishInfo.name}<br /></h1>
            <h2>Price: ${dishInfo.price * props.quantity}<br></br></h2>
            <h3>Quantity: {props.quantity}<br/></h3>
        </section>
    );
}