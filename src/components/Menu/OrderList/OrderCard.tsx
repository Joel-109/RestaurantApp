import { Chip } from "@nextui-org/chip";

interface OrderCardProps{
    id: string;
    status: "Pending" | "In delivery" | "Delivered";
    date: string;
    total: number;
}

function OrderCard(props:OrderCardProps){
    return(
        <article className="flex flex-col gap-2 bg-white h-30 min-w-56 p-2.5 max-w-80 shadow-md shadow-gray-400 rounded-xl px-8 py-4">
            <div className="flex gap-8 justify-between ">
                <h1 className="font-bold"> {props.id}</h1>
            </div>
            <p className="text-gray-400">{props.date} </p>
            <p className="text-gray-400">{props.total} </p>
            <Chip color={props.status === "Pending"? "warning" : props.status === "In delivery"? "primary": "success"}>{props.status}</Chip>
        </article>
    );
}

export default OrderCard;