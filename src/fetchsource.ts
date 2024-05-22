
export async function getAllDishes(){
    const response = await fetch('http://restfullapi-production-374f.up.railway.app/api/dish');
    const data = response.json().catch((error)=>console.error(error));
    return data;
}

export async function getDishInfo(id: string) : Promise<Dish> {
    const response = await fetch(`http://restfullapi-production-374f.up.railway.app/api/dish/${id}`);
    const data = response.json().catch((error)=>console.error(error));
    return data;
}

interface Dish {
    id: string;
    name: number;
    category: string;
    imageUrl: string;
    price: number;
    description: string;
}


interface CartInfo {
    TotalPrice: number;
    Products: Product[];
}

interface Product {
    ProductId: string;
    ProductQuantity: number;
}

export async function getCart(token: string | null) : Promise<CartInfo> {
    const response = await fetch('https://backenduserapiv2-production.up.railway.app/clientService/cart', {
        method: 'GET',
        mode:"cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });
    
    const data: CartInfo = await response.json();
    return data;
}

export async function makeOrder(token: string | null, address: string) : Promise<boolean> {
    const response = await fetch(`https://backenduserapiv2-production.up.railway.app/clientService/orders/${address}`, {
        method: 'POST',
        mode:"cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });
    
    return response.ok;
}

interface Order {
    DeliveryAdress: string;
    OrderId: string;
    Status: "Pending" | "In delivery" | "Delivered";
    Date: string;
    Products: Product[];
}

export async function getOrders(token: string | null) : Promise<Order[]> {
    const response = await fetch('https://backenduserapiv2-production.up.railway.app/clientService/orders', {
        method: 'GET',
        mode:"cors",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` 
        }
    });
    
    const data = await response.json();
    console.log(data);
    return data;
}

export async function getDishQuantity(token: string | null, id : string): Promise<number>{
    
    if (!token) {
        return 0;
    }
    
    const response = await fetch(`https://backenduserapiv2-production.up.railway.app/clientService/products/${id}`, {
        method: 'GET',
        mode:"cors",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });  
    

    const data = await response.json();

    return data.ProductQuantity;
}

export async function addDishToCart(token: string | null, id: string): Promise<boolean>{
    if (!token) {
        return false;
    }

    const response = await fetch(`https://backenduserapiv2-production.up.railway.app/clientService/cart/products/${id}`, {
        method: 'POST',
        mode:'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    });
    
    return response.ok;
}

export async function deleteDishFromCart(token: string | null, id: string): Promise<boolean>{
    if (!token) {
        return false;
    }
    
    const response = await fetch(`https://backenduserapiv2-production.up.railway.app/clientService/cart/products/${id}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        },
    });

    return response.ok;
}