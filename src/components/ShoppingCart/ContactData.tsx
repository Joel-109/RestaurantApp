import {Input} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import { useMutation,useQueryClient } from "react-query";
import { makeOrder } from "../../fetchsource";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";



interface Props {
    totalPrice: number;
}

export default function ContactData( props: Props){
    const {getToken} = useAuth();
    const [deliveryAddress, setAddress] = useState(""); 
    const queryClient = useQueryClient();

    console.log("ContactData rendered: ", deliveryAddress)

    const { mutate: submitOrder } = useMutation({
        mutationFn: (address:string)=>getToken().then((token) => makeOrder(token, address)),
        onSuccess: () => {
            queryClient.invalidateQueries("cart");
            queryClient.invalidateQueries("orders");
            queryClient.setQueryData("cart", { TotalPrice: 0, Products: []})
        },
    })

    return ( 
        <article className="flex mt-5 items-center justify-center wrap">
            <Input
                onChange={(e)=> setAddress(e.currentTarget.value)}
                isClearable
                type="text"
                label="Address"
                variant="bordered"
                defaultValue="Enter your address"
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
            />
            <Input
                isClearable
                type="text"
                label="Phone Number"
                variant="bordered"
                defaultValue="Enter your number"
                onClear={() => console.log("input cleared")}
                className="max-w-lg ml-5"
            />
            <p className="bg-white hover:border-slate-400 border-slate-200 border-2 font-bold text-center rounded-xl ml-5 h-14 w-32 justify-center">
                <h1>Total <br /></h1>{props.totalPrice.toFixed(2)}$
            </p>

            <Button color="warning" className="font-bold h-14 mx-5 min-w-40 text-white" onClick={
                () => submitOrder(deliveryAddress)
            }>
                Send
            </Button>
        </article>
    );
}