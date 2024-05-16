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
    <SignInButton />
    </SignedOut>
    </main>
  )
}
 