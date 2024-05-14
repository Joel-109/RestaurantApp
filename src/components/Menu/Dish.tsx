import React from "react";
import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";

interface DishProps {
    name: string
    price: number
    description: string
    quantity: number
}
  
export default function Dish(props: DishProps) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none size-48"
        >
      <CardHeader className="absolute z-10 top-1 flex-row justify-between !items-start w-full">
          <p className="text-tiny text-white/80 uppercase font-bold">{props.name}</p>
          <p className="text-tiny text-white/80 uppercase font-bold">{props.price}</p>
      </CardHeader>
      <Image
        alt="Woman listing to music"
        className="object-cover w-full h-full z-0"
        height={200}
        src="https://nextui.org/images/hero-card.jpeg"
        width={200}
      />
      <CardFooter className="justify-between  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 w-full">
        <Button className="text-tiny text-white font-bold bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          +
        </Button>
        <p className="text-white font-bold">{props.quantity}</p>
        <Button className="text-tiny text-white font-bold bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          -
        </Button>
        </CardFooter>
    </Card>
  );
}