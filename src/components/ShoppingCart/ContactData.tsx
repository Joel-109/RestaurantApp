import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import { useMutation, useQuery } from "react-query";
import { getCart, makeOrder } from "../../fetchsource";
import { useAuth } from "@clerk/clerk-react";
import {CircularProgress} from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
import { useState } from "react";

interface Props {
    totalPrice: number;
}

export default function ContactData( props: Props){
    const {getToken} = useAuth();
    const [deliveryAddress, setAddress] = useState("");

    const { mutate: submitOrder } = useMutation({
        mutationFn: (address:string)=>getToken().then((token) => makeOrder(token, address))
    })

    return ( 
        <article className="flex mt-5 items-center justify-center wrap">
            <Input
                onKeyUpCapture={(e)=> setAddress(e.currentTarget.value)}
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

            <Button color="warning" className="font-bold h-14 mx-5 min-w-40 text-white">
                Send
            </Button>
        </article>
    );
}