import { Chip } from "@nextui-org/chip";
import {Popover, PopoverTrigger, PopoverContent, Button, Input} from "@nextui-org/react";
import MealOrder from "./MealOrder";

interface OrderCardProps{
    id: string;
    status: "Pending" | "In delivery" | "Delivered";
    date: string;
    deliveryAddress: string;
    products: Product[];
}

interface Product {
    ProductId: string;
    ProductQuantity: number;
}

function OrderCard(props:OrderCardProps){
    
    return(
        <article className="flex flex-col gap-2 bg-white h-30 min-w-56 p-2.5 max-w-80 shadow-md shadow-gray-400 rounded-xl px-8 py-4">
            <div className="flex gap-8 justify-between ">
                <h1 className="font-bold"> {props.id}</h1>
            </div>
            <p className="text-gray-400">{props.date} </p>
            <p className="text-gray-400">{props.deliveryAddress} </p>
            <Popover placement="bottom" showArrow offset={10}>
                <PopoverTrigger>
                    <Button color="primary" className="font-bold"> Show Products</Button>
                </PopoverTrigger>
                <PopoverContent className="w-[320px] max-h-96 overflow-y-auto scrollbar-hide">
                    {(titleProps) => (
                    <div className="px-1 py-2 w-full">
                        <div className="mt-2 flex flex-col gap-2 w-full pt-1">
                            {props.products.map((product) => <MealOrder mealId={product.ProductId} quantity={product.ProductQuantity}/>)} 
                        </div>
                    </div>
                    )}
                </PopoverContent>
          </Popover>
            <Chip color={props.status === "Pending"? "warning" : props.status === "In delivery"? "primary": "success"}>{props.status}</Chip>
        </article>
    );
}

export default OrderCard;