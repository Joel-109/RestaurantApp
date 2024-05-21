import React, { useState } from "react";
import {Card, CardFooter, Image, Button, CardHeader} from "@nextui-org/react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addDishToCart, deleteDishFromCart, getDishQuantity } from "../../fetchsource";
import {CircularProgress} from "@nextui-org/react";
import { useAuth } from "@clerk/clerk-react";

interface DishProps {
    name: string
    price: number
    description: string
    quantity: number
    imageUrl: string
    id: string
}
  
export default function Dish(props: DishProps) {
  const [image, setImage]= useState(true);
  const { getToken } = useAuth();
  const queryClient = useQueryClient()
  
  const {data : quantity, isLoading, isError} = useQuery({
    queryKey: ["dish" + props.id], 
    queryFn: ()=> getToken().then((token) => getDishQuantity(token, props.id)),
  });

  const {mutate : addDish} = useMutation({
    mutationFn: ()=>getToken().then((token) => addDishToCart(token, props.id)),
    onSuccess: ()=> queryClient.invalidateQueries({queryKey:["dish" + props.id]}),
  });
  
  const {mutate : deleteDish} = useMutation({
    mutationFn: ()=>getToken().then((token) => deleteDishFromCart(token, props.id)),
    onSuccess: ()=> queryClient.invalidateQueries({queryKey:["dish" + props.id]}),
  });

  if (isLoading) { 
    return <CircularProgress color="warning" aria-label="Loading..."/>
  }

  function changeToDescription(){
    setImage(!image);
  }

  return (
    <article className="mx-1">
      <Card
      isFooterBlurred
      radius="lg"
      className="border-none size-48"
      >
      {image ? 
      <>
        <CardHeader className="absolute z-10 top-1 flex-row justify-between !items-start w-full ">
          <p className="text-tiny text-white/80 uppercase font-bold">{props.name}</p>
          <p className="text-tiny text-white/80 uppercase font-bold">{props.price}</p>
        </CardHeader>
        <Image
          alt="Woman listing to music"
          className="object-cover w-full h-52 z-0"
          height={200}
          src={props.imageUrl}
          width={200}
          onClick={changeToDescription}
        />
      </> : <Card  className="h-auto w-auto z-0">
          <div onClick={changeToDescription} className="p-2 w-full h-44">
            <h1 className="font-bold">Description : </h1>
            <p className="text-sm" > {props.description}</p>
          </div> </Card>
          }
      <CardFooter className="justify-between  before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small z-10 w-full">
        <Button onClick={() => addDish()} className="text-tiny text-white font-bold bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          +
        </Button>
        <p className="text-white font-bold">{isError ? 0: quantity}</p>
        <Button onClick={() => deleteDish()} className="text-tiny text-white font-bold bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          -
        </Button>
        </CardFooter>
    </Card>
    </article>
  );
}