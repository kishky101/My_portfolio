import { BrowserRouter } from "react-router-dom";

import {About, Contact, Experience, Hero, Navbar, Tech, Works} from './components'
import { useContext, useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { ThemeContext } from "./context/theme.context";


const App = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setTheme('dark')
        } else {  
            setTheme('light')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
        }else {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
        }
    }, [theme])

    

    const toggleTheme = () => {
        setTheme((prev) => prev === 'dark'? 'light': 'dark');
        localStorage.setItem('theme', theme)
    };


    return (
        <BrowserRouter>
            <div className="relative bg-l-primary dark:bg-primary">
            <div 
                className={`${theme === 'dark'? 'bg-white-100' : 'bg-primary'} fixed right-0 top-[100px] w-10 h-10 rounded-l flex justify-center items-center z-[100] cursor-pointer`}
                onClick={toggleTheme}
            >
                {theme === 'dark'? <BsSunFill id="sun" color="#050816" />: <BsMoonFill id="moon" />} 
            </div>
                <div className="relative bg-l-hero-pattern dark:bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <div className="bg-l-primary dark:bg-primary z-0">
                    <About />
                    <Experience />
                    <Tech />
                    <Works />
                    {/* <Feedbacks /> */}
                    <div className="relative z-0">
                        <Contact />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;