import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function Header(props) {
    const [navbar, setNavbar] = useState(false);

    return (
      <div  className={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans bg-body'}` }>
        <nav className={`${props.darkMode ? ' text-gray-600' : 'text-gray-600'} rounded-t-none rounded-lg shadow-lg bg-gradient-to-r from-rose-100 to-teal-100 md:sticky md:top-0 md:w-screen sm:w-screen`}>
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between  py-3 md:py-5 md:block">
                    <NavLink onClick={() => setNavbar(false)} className="" to="/"><img className="w-12 rounded-full" src="/Images/logo.png" alt="" /></NavLink>
                        
                       
                        
                        
                
                        <div className="md:hidden flex ">
                        <div className=" mt-2 ">
                 <button onClick={props.toggleDarkMode}>
                   {props.darkMode ? (
                     <svg className="w-8 p-1 hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                       />
                     </svg>                    ) : (                      <svg className="w-8 p-1 hover:animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">                        <path                          strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                       />
                     </svg>
                   )}
                 </button>
               </div>
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                     
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                         
                            
                            <li className="text-gray-500 hover:text-gray-800">
                            <NavLink onClick={() => setNavbar(!navbar)} className=" text-lg hover:underline shadow-xl p-0.5 px-1 rounded-lg " to="/campgrounds">Campgrounds</NavLink>
                            </li>
                            <li className="text-gray-500 hover:text-gray-800">
                            <NavLink onClick={() => setNavbar(!navbar)} className=" text-lg hover:underline shadow-xl p-0.5 px-1 rounded-lg " to="/contact">Contact</NavLink>
                            </li>
                            <li className="text-gray-500 hover:text-gray-800">
                            <NavLink onClick={() => setNavbar(!navbar)} className=" text-lg hover:underline shadow-xl rounded-lg " to="/login">Register</NavLink>
                            </li>
                            <li className="md:block sm:hidden">
                          <div className=" mt-2 ">
                 <button onClick={props.toggleDarkMode}>
                   {props.darkMode ? (
                     <svg className="w-8 p-1 hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
                       <path
                         strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                       />
                     </svg>                    ) : (                      <svg className="w-8 p-1 hover:animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">                        <path                          strokeLinecap="round"
                         strokeLinejoin="round"
                         strokeWidth={2}
                         d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                       />
                     </svg>
                   )}
                 </button>
               </div>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <Outlet/>
        </div>
    );
}



// import { NavLink, Outlet } from "react-router-dom"

// export default function Header(props){
//     return(
//       <div  className={`${props.darkMode ? 'bg-dark text-white font-Sans' : 'text-gray-600 font-Sans'}`}>
//         <div className={`${props.darkMode ? ' text-gray-600' : 'text-gray-600'} border rounded-lg shadow-lg bg-gradient-to-r from-rose-100 to-teal-100 sticky top-0 md:w-screen sm:w-screen`}>
//         <div className="flex items-center justify-between md:mr-8 lg:mr-8">
//         <div className="text-2xl space-x-6 px-4 py-4 font-serif flex">
//             <NavLink className=" text-lg hover:underline shadow-xl p-0.5 px-1 rounded-lg " to="/">Home</NavLink>
            
//             <NavLink className=" text-lg hover:underline shadow-xl p-0.5 px-1 rounded-lg " to="/campgrounds">Campgrounds</NavLink>
//             <NavLink className=" text-lg hover:underline shadow-xl p-0.5 px-1 rounded-lg " to="/contact">Contact</NavLink>
           
//         </div>
//         <div className="flex justify-center items-center space-x-2">
          
        
//         <div className=" mt-2 ">
//                   <button onClick={props.toggleDarkMode}>
//                     {props.darkMode ? (
//                       <svg className="w-8 p-1 hover:animate-pulse" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke="currentColor">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//                         />
//                       </svg>
//                     ) : (
//                       <svg className="w-8 p-1 hover:animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//                         />
//                       </svg>
//                     )}
//                   </button>
//                 </div>
                
//           <NavLink className=" text-lg hover:underline shadow-xl rounded-lg " to="/login">Register</NavLink>
          
                
                
//         </div>
        
//         </div>
        
//         </div>
//         <Outlet/>
//         </div>
//     )
// }