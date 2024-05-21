import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import { useQuery } from "react-query";
import { getCart } from "../../fetchsource";
import { useAuth } from "@clerk/clerk-react";


export default function ContactData(){
    const {getToken} = useAuth();
    const {data: CartInfo} = useQuery({
        queryKey: ["cart"],
        queryFn: ()=>getToken().then((token) => getCart(token)),
    })
    return ( 
        <article className="flex mt-5">
            <Input
                isClearable
                type="text"
                label="Address"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue="Enter your address"
                onClear={() => console.log("input cleared")}
                className="max-w-lg"
            />
            <Input
                isClearable
                type="text"
                label="Phone Number"
                variant="bordered"
                placeholder="Enter your email"
                defaultValue="Enter your number"
                onClear={() => console.log("input cleared")}
                className="max-w-lg ml-5"
            />
             <Input
                isClearable={false}
                isReadOnly={true}
                type="text"
                label="Total"
                variant="bordered"
                defaultValue={`${CartInfo?.TotalPrice}`}
                className="w-sm ml-5"
            />
            <Button color="warning" className="font-bold h-14 mx-5 min-w-40 text-white">
                Send
            </Button>
        </article>

    );
}