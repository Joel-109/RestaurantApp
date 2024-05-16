export async function getAllDishes(){
    const response = await fetch('http://127.0.0.1:8000/api/dish');
    const data = response.json().catch((error)=>console.error(error));
    return data;
}