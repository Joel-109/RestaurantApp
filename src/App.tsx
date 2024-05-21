import { useState } from 'react';
import { NavBar } from './components/NavBar/NavBar.tsx'
import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import useDarkMode from 'use-dark-mode';
import DashBoard from './components/Menu/DashBoard.tsx';
import ShoppingCart from './components/ShoppingCart/ShoppingCart.tsx';


export enum ActiveWindow {
  ShoppingCart,
  DashBoard,
}
 
export default function App() {
  const darkMode = useDarkMode(false);
  const [activeWindow,setActiveWindow] = useState(ActiveWindow.DashBoard);
  const [userDishes, setUserDishes] = useState([]);
  const darkmode =`${darkMode.value ? 'dark' : ''} text-foreground bg-background`

 
  return (
    <main className={"w-full"+darkMode}>
    <SignedIn>
    <NavBar  SetActiveWindow={setActiveWindow} ActiveWindows={activeWindow}/>
        {
          activeWindow === ActiveWindow.ShoppingCart && <ShoppingCart/>
        }
        {
            activeWindow === ActiveWindow.DashBoard && <DashBoard/>
        }
    </SignedIn>
    <SignedOut>
        <article className='flex align-middle items-center justify-center h-svh w-svw bg-gray-50'>
          <div className=' text-lg mx-20'>
            <h1 className=' font-extrabold text-8xl my-5'> Welcome to <br /> Fast Food </h1>
            <h2 className=' text-3xl'> Buy Dinners, Share Moments</h2>
            <button className='w-52 h-10 bg-orange-500 my-5 text-white font-extrabold rounded-md'>
               <SignInButton  />
            </button>
          </div>
          <img src="public\imagenPortada.jpg" className='w-72 h-72 object-cover rounded-md' alt="" />
        </article>
    </SignedOut>
    </main>
  )
}
 